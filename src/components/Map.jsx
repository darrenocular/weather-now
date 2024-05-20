import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "./styles/Map.module.css";
import mapData from "../../utils/mapData";

function Map() {
  return (
    <ComposableMap
      projection="geoMercator"
      className={styles.map}
      projectionConfig={{
        scale: 90000,
        center: [103.85, 1.32],
      }}
      fill="#f9f5e8"
      stroke="#003400"
      stroke-width={3}
    >
      <Geographies geography={mapData.data}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              className={styles.area}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}

export default Map;
