import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/actions/filterActions";
import "../../assets/css/SearchBar.css";
import SearchTag from "./SearchTag";

function SearchBar() {
  const filters = useSelector((state: any) => state.filters);
  const dispatch = useDispatch();
  return (
    <div className="container search-bar">
      <div className="content search-content">
        <div className="left-panel search-tag">
          {filters.map((filter: string) => {
            return (
              <React.Fragment key={filter}>
                <SearchTag name={filter} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="right-panel">
          <a href="#" onClick={() => dispatch(setFilters([]))}>
            Clear
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
