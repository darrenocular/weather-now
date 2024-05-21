# WeatherNow

## Introduction

A quick-and-easy front-end app that provides 2-hour weather forecasts for different parts of Singapore. Built in React.js and optimized for both web and mobile.

Powered by the National Environment Agency (NEA)'s [2-hour weather forecast API](https://beta.data.gov.sg/collections/1456/datasets/d_91ffc58263cff535910c16a4166ccbc3/view).

Deployed at: https://sg-weather-now.netlify.app/. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/e0d3f391-f713-4d5c-8b58-6b07ad60b638/deploy-status)](https://app.netlify.com/sites/sg-weather-now/deploys)

## Getting Started

This app fetches forecast data across 47 areas in Singapore from NEA's 2-hour weather forecast API and visualizes them on a 2D map of Singapore. The map visualization is created with [React Simple Maps](https://www.react-simple-maps.io/).

![weathernow-demo](https://github.com/darrenocular/weather-now/assets/43130901/388e8474-b516-4ca7-9b4f-f532ab1ad3f1)

For ease of visualization, the map is colour-coded based on the various categories of precipitation forecasts provided by NEA. Each colour corresponds with a particular precipitation forecast (see legend). The design choice to colour-code the map instead of placing weather symbols within each area is intended to reduce clutter within the map view and help users more quickly ascertain the forecast for a particular area. It is generally not as easy to differentiate between different weather symbols and what they refer to, as opposed to a simpler differentiating marker - colours.

Users can click on any area of the map or select from the dropdown menu (in the event the map does not display properly in a user's device) to get the forecast of that particular area.

Alternatively, users can also easily get the forecast of their current location with the click of a button. For this function, location services must be enabled on the user's device.

![buttons](https://github.com/darrenocular/weather-now/assets/43130901/9e67f7a9-2d5f-4a8b-b9c8-281f6fcf993d)

To update the forecast data, users can simply click on the refresh button or refresh the entire page.

## Potential Use Cases

There are 3 potential use cases for WeatherNow:

1. Animal welfare: The 2-hour weather forecasts provided by WeatherNow can help zookeepers manage animal welfare by adjusting temperature and humidity levels in enclosures and/or keeping animals indoors in inclement weathers.

2. Visitor safety: WeatherNow can provide accurate 2-hour forecasts to help staff decide if an outdoor event should be rescheduled/cancelled to ensure the safety of visitors.

3. Operational efficiency: Having a full view of the precipitation forecasts across different parts of Singapore can help staff anticipate the number of visitors to be expected at Mandai Wildlife Reserve (perhaps based on past trends). For example, this can allow staff to be redeployed for other operational activities (such as maintenance work) when visitor numbers are expected to be low.

## Future Enhancements

- At present, the NEA API only provides precipitation forecasts. Through the integration of other APIs that provide other meteorological data/forecasts (such as temperature, wind levels and humidity), WeatherNow can facilitate a more holistic data-driven decision-making process that accounts for other relevant factors.

- The integration of a predictive model based on a correlation between precipitation levels and visitors count can help Mandai to anticipate crowd levels to a greater degree of accuracy.

## References

- React Simple Maps: https://www.react-simple-maps.io/docs/getting-started/
- Tutorial: Using React Simple Maps: https://medium.com/@gmonte468/interactive-maps-with-react-1a2c3a6667e7
- NEA 2-hour Weather Forecast: https://beta.data.gov.sg/collections/1456/datasets/d_91ffc58263cff535910c16a4166ccbc3/view
- Haversine Formula: https://www.geeksforgeeks.org/haversine-formula-to-find-distance-between-two-points-on-a-sphere/
