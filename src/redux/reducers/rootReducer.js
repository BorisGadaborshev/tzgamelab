import { combineReducers } from "redux";

import { randomReducer } from "./randomReducer";
import { startReducer } from "./startReducer";

export const rootReducer = combineReducers({
  random: randomReducer,
  start: startReducer,
});
