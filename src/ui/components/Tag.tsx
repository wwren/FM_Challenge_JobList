import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/actions/filterActions";
import "../../assets/css/Tag.css";

function Tag({ name }: { name: string }) {
  const filters = useSelector((state: any) => state.filters);
  const dispatch = useDispatch();

  const _handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const filter = (e.target as HTMLButtonElement).innerHTML;
    const newFilters = filters.includes(filter)
      ? filters
      : [...filters, filter];
    console.log("filters", filters);
    console.log("include", filters.includes(filter));
    dispatch(setFilters(newFilters));
  };
  return (
    <button className="tag" onClick={(e) => _handleOnClick(e)}>
      {name}
    </button>
  );
}

export default Tag;
