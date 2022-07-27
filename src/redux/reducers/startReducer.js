import { initState } from "../initState";

export const startReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_START":
      return payload;
    default:
      return state;
  }
};
