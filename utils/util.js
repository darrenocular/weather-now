export const computeAreas = (data) => {
  const areas = data["area_metadata"].map((area) => area.name);

  return areas;
};

// export const getForecastMetadata = (data) => {};

export const getAreaForecast = (area, data) => {
  return data["items"][0].forecasts.filter(
    (forecast) => area === forecast.area
  )[0].forecast;
};
