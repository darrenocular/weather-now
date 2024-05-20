import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Map from "./components/Map";
import {
  computeAreas,
  getAreaForecast,
  getForecastMetadata,
} from "../utils/util";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherMetadata, setWeatherMetadata] = useState(null);
  const areas = weatherData ? computeAreas(weatherData) : [];
  const [selectedArea, setSelectedArea] = useState("");
  const [areaForecast, setAreaForecast] = useState("");

  const getWeatherData = async () => {
    try {
      const res = await fetch(
        "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
      );

      if (res.ok) {
        const data = await res.json();
        setWeatherData(data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  // Fetch weather data on page load
  useEffect(() => {
    getWeatherData();
  }, []);

  // Set metadata when weather data is fetched
  useEffect(() => {
    if (weatherData) setWeatherMetadata(getForecastMetadata(weatherData));
  }, [weatherData]);

  // Fetch area forecast when selectedArea changes
  useEffect(() => {
    if (weatherData)
      setAreaForecast(getAreaForecast(selectedArea, weatherData));
  }, [selectedArea]);

  return (
    <>
      <div className={styles.header}>
        <h1>WeatherNow</h1>
        <p>
          Click on any area of the map below or select an area from the dropdown
          menu to get the 2-hour weather forecast for a particular location in
          Singapore.
        </p>
      </div>
      {selectedArea ? (
        <p className={styles["info-panel"]}>
          The 2-hour weather forecast for <span>{selectedArea}</span> is{" "}
          <span>{areaForecast}</span>.
        </p>
      ) : (
        ""
      )}
      <div className={styles["form-container"]}>
        <form className={styles.dropdown}>
          <select id="area" onChange={handleAreaChange} value={selectedArea}>
            <option value="" disabled>
              Select an area
            </option>
            {areas?.map((area) => (
              <option value={area} key={area}>
                {area}
              </option>
            ))}
          </select>
        </form>
      </div>
      <Map
        weatherData={weatherData}
        weatherMetadata={weatherMetadata}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
      />
      <div className={styles.footer}>
        <p>
          Powered by the National Environment Agency (NEA)'s{" "}
          <a
            href="https://www.nea.gov.sg/corporate-functions/weather#weather-forecast2hr"
            target="blank"
          >
            2-hour weather forecast
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default App;
