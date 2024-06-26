import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Map from "./components/Map";
import {
  computeAreas,
  getAreaForecast,
  getForecastMetadata,
  findClosestArea,
} from "../utils/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherMetadata, setWeatherMetadata] = useState(null);
  const areas = weatherData ? computeAreas(weatherData) : [];
  const [selectedArea, setSelectedArea] = useState("");
  const [areaForecast, setAreaForecast] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const getUserLocation = () => {
    setIsLoading(true);
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, () => {
          throw new Error("Unable to retrieve your location");
        });
      } else {
        throw new Error("Geolocation not supported on this device");
      }
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  const success = (position) => {
    const userLat = position.coords.latitude;
    const userLon = position.coords.longitude;

    const closestArea = findClosestArea(userLat, userLon, areas);
    setSelectedArea(closestArea.name);
    setIsLoading(false);
  };

  // Fetch weather data on page load
  useEffect(() => {
    getWeatherData();
  }, []);

  // Set metadata when weather data is fetched
  useEffect(() => {
    if (weatherData) {
      setWeatherMetadata(getForecastMetadata(weatherData));
    }
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
        <div className={styles["info-panel"]}>
          <p>{selectedArea}</p>
          <p>Forecast: {areaForecast}</p>
        </div>
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
              <option value={area.name} key={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </form>
        <button className={styles["location-btn"]} onClick={getUserLocation}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <FontAwesomeIcon icon={faLocationArrow} />
          )}
        </button>
        <button className={styles["refresh-btn"]} onClick={getWeatherData}>
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
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
