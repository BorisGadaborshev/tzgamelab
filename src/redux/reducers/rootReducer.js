import { combineReducers } from "redux";

import { randomReducer } from "./randomReducer";
import { startReducer } from "./startReducer";
import { navReducer } from "./navReducer";

export const rootReducer = combineReducers({
  random: randomReducer,
  start: startReducer,
  nav: navReducer,
});
