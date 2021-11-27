import React, { useRef } from "react";
import { ReactComponent as Delete } from "../../assets/images/icon-remove.svg";

function SearchTag({
  name,
  setFilters,
}: {
  name: string;
  setFilters: (prev: any) => any;
}) {
  const currTag = useRef() as React.MutableRefObject<HTMLSpanElement>;
  // const currTag = useRef<HTMLSpanElement>();

  const _handleOnClick = () => {
    console.log("currTag", currTag.current.innerHTML);
    const filter = currTag.current.innerHTML;
    setFilters((prev: any) => prev.filter((ele: any) => ele != filter));
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
