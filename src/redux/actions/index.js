import { LOAD_GAMES, SET_LOADING } from "../types";

function loadGames(payload) {
  // payload should be an array
  return {
    type: LOAD_GAMES,
    payload,
  };
}

function setLoading(payload) {
  // payload should be a boolean
  return {
    type: SET_LOADING,
    payload,
  };
}

// using this api: https://www.boardgameatlas.com/api/docs

export function searchGame(name) {
  return async (dispatch) => {
    console.log(process.env, process.env.REACT_APP_CLIENT_ID);
    dispatch(setLoading(true));
    fetch(`https://api.boardgameatlas.com/api/search?name=${name}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(loadGames(data.games));
        dispatch(setLoading(false));
      })
      .catch((err) => console.error(`Fetching error: ${err}`));
  };
}
