import { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";
import { computeAreas, getAreaForecast } from "../utils/util";

function App() {
  const [weatherData, setWeatherData] = useState(null);
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

  // Fetch area forecast when selectedArea changes
  useEffect(() => {
    if (weatherData)
      setAreaForecast(getAreaForecast(selectedArea, weatherData));
  }, [selectedArea]);

  return (
    <>
      <h1>WeatherNow</h1>
      {/* <Map /> */}
      <form>
        <label htmlFor="area">Area</label>
        <select name="area" onChange={handleAreaChange} value={selectedArea}>
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
      {selectedArea ? (
        <p>
          The 2-hour weather forecast for {selectedArea} is {areaForecast}.
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
