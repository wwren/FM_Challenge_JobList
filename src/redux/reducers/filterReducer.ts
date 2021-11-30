import { ActionTypes } from "../constants/action-types";
import { Action } from "../../types/types";

export const filterReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_FILTERS:
      return [...action.payload];
    default:
      return state;
  }
};
