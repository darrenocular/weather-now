import React, { useState, memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import styles from "./styles/Map.module.css";
import mapData from "../../utils/mapData";
import { reformatAreaString, computeAreaFill } from "../../utils/util";

function Map({ weatherData }) {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <>
      <div data-tooltip-id="map-tooltip">
        <ComposableMap
          projection="geoMercator"
          className={styles.map}
          projectionConfig={{
            scale: 98000,
            center: [103.85, 1.32],
          }}
          stroke="#003400"
          strokeWidth={3}
        >
          <Geographies geography={mapData.data}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const fill = weatherData
                  ? computeAreaFill(geo.properties["PLN_AREA_N"], weatherData)
                  : "var(--color-beige)";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={`anchor-area ${styles.area}`}
                    fill={fill}
                    onMouseEnter={() => {
                      setTooltipContent(
                        `${reformatAreaString(geo.properties["PLN_AREA_N"])}`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <Tooltip
        id="map-tooltip"
        anchorSelect=".anchor-area"
        style={{
          backgroundColor: "var(--color-green)",
          color: "var(--color-yellow)",
          fontWeight: "700",
        }}
      >
        {tooltipContent}
      </Tooltip>
    </>
  );
}

export default Map;
