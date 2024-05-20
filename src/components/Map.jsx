import React, { useState, memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import styles from "./styles/Map.module.css";
import mapData from "../../utils/mapData";
import { reformatAreaString, computeAreaFill } from "../../utils/util";
import Legend from "./Legend";

function Map({ weatherData, weatherMetadata, selectedArea, setSelectedArea }) {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <>
      <div data-tooltip-id="map-tooltip" className={styles["map-container"]}>
        {weatherMetadata && (
          <div className={styles.metadata}>
            <p>
              Forecast for <b>{weatherMetadata.periodStart}</b> to{" "}
              <b>{weatherMetadata.periodEnd}</b>
            </p>
            <p>
              Last update at <b>{weatherMetadata.lastUpdate}</b>
            </p>
          </div>
        )}
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
                const area = reformatAreaString(geo.properties["PLN_AREA_N"]);
                const fill = weatherData
                  ? computeAreaFill(geo.properties["PLN_AREA_N"], weatherData)
                  : "var(--color-beige)";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={`anchor-area ${styles.area}`}
                    fill={selectedArea === area ? "var(--color-yellow)" : fill}
                    onMouseEnter={() => {
                      setTooltipContent(`${area}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick={() => setSelectedArea(area)}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <Legend />
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
