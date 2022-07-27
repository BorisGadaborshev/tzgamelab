import { initState } from "../initState";

export const randomReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_RANDOM":
      return payload;
    default:
      return state;
  }
};
