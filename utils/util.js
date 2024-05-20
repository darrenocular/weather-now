export const computeAreas = (data) => {
  const areas = data["area_metadata"].map((area) => area.name);

  return areas;
};

export const getForecastMetadata = (data) => {
  const options = {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const lastUpdate = new Date(
    data["items"][0]["update_timestamp"]
  ).toLocaleString("en-sg", options);
  const periodStart = new Date(
    data["items"][0]["valid_period"].start
  ).toLocaleString("en-sg", options);
  const periodEnd = new Date(
    data["items"][0]["valid_period"].end
  ).toLocaleString("en-sg", options);

  return { lastUpdate, periodStart, periodEnd };
};

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
    return "#00FEFF";
  } else if (forecast.includes("Fair")) {
    return "#02EBEC";
  } else if (forecast.includes("Partly Cloudy")) {
    return "#02BBC2";
  } else if (forecast.includes("Cloudy")) {
    return "#00999C";
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
