import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { jobReducer } from "./jobReducer";

const reducers = combineReducers({
  jobs: jobReducer,
  filters: filterReducer,
});

export default reducers;
