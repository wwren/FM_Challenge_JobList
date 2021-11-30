import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/actions/filterActions";
import { ReactComponent as Delete } from "../../assets/images/icon-remove.svg";

function SearchTag({ name }: { name: string }) {
  const filters = useSelector((state: any) => state.filters);
  const dispatch = useDispatch();
  const currTag = useRef() as React.MutableRefObject<HTMLSpanElement>;

  const _handleOnClick = () => {
    console.log("currTag", currTag.current.innerHTML);
    const filter = currTag.current.innerHTML;
    console.log("filters", filters);
    dispatch(setFilters(filters.filter((ele: any) => ele != filter)));
  };

  return (
    <div>
      <span className="tag tag--search-tag" ref={currTag}>
        {name}
      </span>
      <span>
        <Delete onClick={_handleOnClick} />
      </span>
    </div>
  );
}

export default SearchTag;
