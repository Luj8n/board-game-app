import React, { useState } from "react";
import { connect } from "react-redux";
import { searchGame } from "../redux/actions";
import { getGames } from "../redux/selectors";
import "./app.css";

function App({ findGame, games }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const queryInput = (e) => {
    findGame(input);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput}></input>
      <button onClick={queryInput}>Fetch games</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
