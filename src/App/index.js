import React, { useEffect } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Search from "../components/Search";
import styles from "./main.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Search />
      <Container />
    </div>
  );
}

export default App;
