import { initState } from "../initState";

export const winReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_WIN":
      return payload;
    default:
      return state;
  }
};
