import React, { useState } from "react";
import { connect } from "react-redux";
import { searchGame } from "../../redux/actions";
import { getGames } from "../../redux/selectors";
import styles from "./main.module.scss";

function Search({ findGame, games }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const queryInput = (e) => {
    findGame(input);
  };

  return (
    <div className={styles.search}>
      <input type="text" className={styles.bar} value={input} onChange={handleInput}></input>
      <button className={styles.button} onClick={queryInput}>
        Search
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: getGames(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findGame: (title) => dispatch(searchGame(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
