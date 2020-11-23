import { combineReducers } from "redux";
import gamesReducer from "./games";

const reducer = combineReducers({ games: gamesReducer });

export default reducer;
