import { initState } from "../initState";

export const hiddenReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_HIDDEN":
      return payload;
      case 'DEL_HIDDEN':
        return payload;
    default:
      return state;
  }
};
