import { combineReducers } from "redux";

import { randomReducer } from "./randomReducer";
import { startReducer } from "./startReducer";
import { navReducer } from "./navReducer";
import { winReducer } from "./winReducer";
import { failReducer } from "./failReducer";
import { hiddenReducer } from "./hiddenReducer";


export const rootReducer = combineReducers({
  random: randomReducer,
  start: startReducer,
  nav: navReducer,
  win: winReducer,
  fail:failReducer,
  hidden: hiddenReducer,

});
