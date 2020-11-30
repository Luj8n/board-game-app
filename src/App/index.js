import React, { useEffect } from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import styles from "./main.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Search />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
