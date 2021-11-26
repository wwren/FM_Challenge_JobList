import React from "react";
import "../../assets/css/SearchBar.css";
import { ChildProps } from "../../types/types";
import SearchTag from "./SearchTag";

function SearchBar({
  filters,
  setFilters,
}: {
  filters: string[];
  setFilters: (prev: any) => any;
}) {
  return (
    <div className="container search-bar">
      <div className="content">
        <div className="left-panel search-tag">
          {filters.map((filter) => {
            return (
              <React.Fragment key={filter}>
                <SearchTag name={filter} setFilters={setFilters} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="right-panel">
          <a href="#" onClick={() => setFilters([])}>
            Clear
          </a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
