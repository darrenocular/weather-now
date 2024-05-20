export const computeAreas = (data) => {
  const areas = data["area_metadata"].map((area) => area.name);

  return areas;
};

// export const getForecastMetadata = (data) => {};

export const getAreaForecast = (area, data) => {
  return data["items"][0].forecasts.filter(
    (forecast) => area === forecast.area || area.includes(forecast.area)
  )[0]?.forecast;
};

export const reformatAreaString = (input) => {
  return input
    .split(" ")
    .map((word) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

export const computeAreaFill = (area, data) => {
  const forecast = getAreaForecast(reformatAreaString(area), data);

  if (forecast.includes("Clear")) {
    return "#00F800";
  } else if (forecast.includes("Fair")) {
    return "#FEFF04";
  } else if (forecast.includes("Partly Cloudy")) {
    return "#FFDE00";
  } else if (forecast.includes("Cloudy")) {
    return "#FFC800";
  } else if (forecast.includes("Light Showers")) {
    return "#FFB200";
  } else if (forecast.includes("Showers")) {
    return "#FFA600";
  } else if (forecast.includes("Heavy Showers")) {
    return "#FE8A00";
  } else if (forecast.includes("Thundery Showers")) {
    return "#FF4702";
  } else {
    return "var(--color-beige)";
  }
};

export const reformatDateString = (input) => {};
