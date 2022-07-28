import { initState } from "../initState";

export const failReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_FAIL":
      return payload;
      case 'DEL_FAIL':
        return payload;
    default:
      return state;
  }
};
