export const computeAreas = (data) => {
  const areas = data["area_metadata"].map((area) => {
    return {
      name: area.name,
      latitude: area["label_location"].latitude,
      longitude: area["label_location"].longitude,
    };
  });

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
  } else if (forecast.includes("Heavy Showers")) {
    return "#FE8A00";
  } else if (forecast.includes("Thundery Showers")) {
    return "#FF4702";
  } else if (
    forecast.includes("Showers") ||
    forecast.includes("Moderate Rain")
  ) {
    return "#FFA600";
  } else {
    return "var(--color-beige)";
  }
};

// Function to calculate distance between two points using the Haversine formula
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // radius of Earth in metres
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

export const findClosestArea = (userLat, userLon, areas) => {
  let closestArea;
  let minDistance = Infinity;

  for (const area of areas) {
    const distance = calculateDistance(
      userLat,
      userLon,
      area.latitude,
      area.longitude
    );
    if (distance < minDistance) {
      minDistance = distance;
      closestArea = area;
    }
  }

  return closestArea;
};
