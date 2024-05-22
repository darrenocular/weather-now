import React from "react";
import styles from "./styles/Legend.module.css";

const Legend = () => {
  return (
    <div className={styles["legend-container"]}>
      <p>LEGEND</p>
      <div className={styles["legend-row"]}>
        <div className={styles["legend-col"]}>
          <p>
            <span className={`${styles.fill} ${styles.clear}`}></span> Clear
          </p>
          <p>
            <span className={`${styles.fill} ${styles.fair}`}></span> Fair
          </p>
          <p>
            <span
              className={`${styles.fill} ${styles["partly-cloudy"]}`}
            ></span>{" "}
            Partly Cloudy
          </p>
          <p>
            <span className={`${styles.fill} ${styles.cloudy}`}></span> Cloudy
          </p>
        </div>
        <div className={styles["legend-col"]}>
          <p>
            <span
              className={`${styles.fill} ${styles["light-showers"]}`}
            ></span>{" "}
            Light Showers
          </p>
          <p>
            <span className={`${styles.fill} ${styles.showers}`}></span>{" "}
            Showers/Moderate Rain
          </p>
          <p>
            <span
              className={`${styles.fill} ${styles["heavy-showers"]}`}
            ></span>{" "}
            Heavy Showers
          </p>
          <p>
            <span
              className={`${styles.fill} ${styles["thundery-showers"]}`}
            ></span>{" "}
            Thundery Showers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legend;
