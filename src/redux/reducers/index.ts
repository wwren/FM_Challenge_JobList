import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { jobReducer, jobOnBoardReducer } from "./jobReducer";

const reducers = combineReducers({
  jobs: jobReducer,
  filters: filterReducer,
  jobsOnBoard: jobOnBoardReducer,
});

export default reducers;
