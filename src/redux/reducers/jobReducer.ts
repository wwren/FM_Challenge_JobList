import { ActionTypes } from "../constants/action-types";
import { Action, JobType } from "../../types/types";

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

export const jobOnBoardReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_JOBS_BASE_ON_FILTERS:
      return [...action.payload];
    default:
      return state;
  }
};
