import React from "react";
import styles from "./styles/Legends.module.css";

const Legends = () => {
  return (
    <div className={styles["legends-container"]}>
      <p>Legends</p>
      <div className={styles["legends-row"]}>
        <div className={styles["legends-col"]}>
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
        <div className={styles["legends-col"]}>
          <p>
            <span
              className={`${styles.fill} ${styles["light-showers"]}`}
            ></span>{" "}
            Light Showers
          </p>
          <p>
            <span className={`${styles.fill} ${styles.showers}`}></span> Showers
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

export default Legends;
