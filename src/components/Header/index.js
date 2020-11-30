import React from "react";
import styles from "./main.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <span>Board games</span>
      </div>
      <div className={styles.otherContainer}>
        <span>About</span>
        <span>Contacts</span>
      </div>
    </div>
  );
}

export default Header;
