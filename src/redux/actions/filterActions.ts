import { ActionTypes } from "../constants/action-types";

export const setFilters = (filters: string[]) => {
  return {
    type: ActionTypes.SET_FILTERS,
    payload: filters,
  };
};
