import React from "react";
import styles from "./main.module.scss";

function Listing({ info }) {
  return (
    <div className={styles.listing}>
      <img src={info.image_url} className={styles.image} alt=""></img>
      <h2 className={styles.title}>{info.name}</h2>
    </div>
  );
}

export default Listing;
