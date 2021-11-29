import { JobType } from "../../types/types";
import { ActionTypes } from "../constants/action-types";

export const setJobs = (jobs: JobType[]) => {
  return {
    type: ActionTypes.SET_JOBS,
    payload: jobs,
  };
};

export const setJobBaseOnFilters = (jobs: JobType[], filters: string[]) => {
  var newJobs: JobType[] = [];
  if (jobs) {
    for (const job of jobs) {
      const allTags: string[] = [job.role, job.level].concat(job.languages);
      const shouldKeep = filters.every(
        (filter: string) => allTags.indexOf(filter) > -1
      );
      if (shouldKeep) {
        newJobs?.push(job);
      }
    }
  }

  return {
    type: ActionTypes.SET_JOBS_BASE_ON_FILTERS,
    payload: newJobs,
  };
};
