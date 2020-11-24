import React from "react";
import { connect } from "react-redux";
import { getGames } from "../../redux/selectors";
import Listing from "../Listing";
import styles from "./main.module.css";

function Container({ games }) {
  console.log(games);
  return (
    <div className={styles.container}>
      {games.map((game) => (
        <Listing info={game} key={game.id} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    games: getGames(state),
  };
};

export default connect(mapStateToProps, null)(Container);
