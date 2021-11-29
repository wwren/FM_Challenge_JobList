import { ActionTypes } from "../constants/action-types";
import { JobType, Action } from "../../types/types";

const initState = {
  jobs: [],
};
export const jobReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_JOBS:
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};
