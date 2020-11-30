import React, { useState } from "react";
import { connect } from "react-redux";
import { searchGame } from "../../redux/actions";
import { getGames } from "../../redux/selectors";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./main.module.scss";

function Search({ findGame, games }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const queryInput = () => {
    findGame(input);
    setInput("");
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.searchBar}
        value={input}
        onChange={handleInput}
        onKeyDown={(e) => {
          // query results if space was pressed
          if (e.key === "Enter") {
            queryInput();
          }
        }}
      ></input>
      <div className={styles.button} onClick={queryInput}>
        Search
        <IoSearchOutline className={styles.searchIcon} />
      </div>
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
