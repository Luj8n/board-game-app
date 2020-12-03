import React from "react";
import styles from "./main.module.scss";

function Listing({ info }) {
  return (
    <div className={styles.listing}>
      <div className={styles.imageContainer}>
        <img src={info.image_url} className={styles.image} alt=""></img>
      </div>
      <div className={styles.info}>
        <span className={styles.title}>{info.name}</span>
        <div className={styles.otherInfo}>
          <span className={styles.price}>Price: {info.price == "0.00" ? "Unknown" : `${info.price}$`}</span>
          <span className={styles.price}>
            Recommended players: {info.min_players ? `${info.min_players} - ${info.max_players}` : `Unknown`}
          </span>
          <span className={styles.price}>
            Average playtime: {info.min_playtime ? `${info.min_playtime} - ${info.max_playtime}` : `Unknown`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Listing;
