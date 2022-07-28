import { initState } from "../initState";

export const navReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_NAV":
      return [...state, payload];
    default:
      return state;
  }
};
