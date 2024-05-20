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
        scale: 98000,
        center: [103.85, 1.32],
      }}
      fill="#fbebce"
      stroke="#003400"
      strokeWidth={3}
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
