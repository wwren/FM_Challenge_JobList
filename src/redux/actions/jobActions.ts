import { JobType } from "../../types/types";
import { ActionTypes } from "../constants/action-types";

export const setJobs = (jobs: JobType[]) => {
  return {
    type: ActionTypes.SET_JOBS,
    payload: jobs,
  };
};
