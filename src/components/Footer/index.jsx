import React from "react";
import styles from "./main.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Luj8n" target="_blank" rel="noreferrer">
        My github
      </a>
      <a href="https://github.com/Luj8n/board-game-app" target="_blank" rel="noreferrer">
        This page's repository
      </a>

      <span>Made by Luj8n</span>
      <span>2020</span>
    </div>
  );
}

export default Footer;
