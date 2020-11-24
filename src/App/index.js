import React, { useEffect } from "react";
import Container from "../components/Container";
import Search from "../components/Search";
import styles from "./main.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Search />
      <Container />
    </div>
  );
}

export default App;
