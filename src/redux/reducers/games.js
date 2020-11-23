import { LOAD_GAMES, SET_LOADING } from "../types";

const initialState = {
  availableGames: [],
  loading: false,
};

function games(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOAD_GAMES:
      return {
        ...state,
        availableGames: action.payload,
      };
    default:
      return state;
  }
}

export default games;
