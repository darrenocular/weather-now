# WeatherNow

## Introduction

A quick-and-easy front-end app that provides 2-hour weather forecasts for different parts of Singapore. Built in React.js.

Powered by the National Environment Agency (NEA)'s 2-hour weather forecast API: https://beta.data.gov.sg/collections/1456/datasets/d_91ffc58263cff535910c16a4166ccbc3/view.

Deployed at:

## Getting Started

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
