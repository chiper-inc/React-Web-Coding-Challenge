import React from "react";
import styles from "./stolenBike.module.css";
import bikeNoImage from "../../assets/bikeNoImage.jpg";

const StolenBike = ({
  title,
  description,
  dateStolen,
  stolenLocation,
  bikeImage,
}) => {
  let dayjs = require("dayjs");
  let dateFormat = dayjs.unix(dateStolen).format("YYYY-MM-DD");

  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <div className={styles.containerImage}>
          {bikeImage ? (
            <img src={bikeImage} alt="bikeNoImage" />
          ) : (
            <img src={bikeNoImage} alt="bike" />
          )}
        </div>
        <div className={styles.containerText}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{dateFormat}</p>
          <p>{stolenLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default StolenBike;
