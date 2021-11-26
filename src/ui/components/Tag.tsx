import React from "react";
import "../../assets/css/Tag.css";

function Tag({
  name,
  setFilters,
}: {
  name: string;
  setFilters: (prev: any) => any;
}) {
  const _handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const filter = (e.target as HTMLButtonElement).innerHTML;
    setFilters((prev: any) =>
      prev.includes(filter) ? [...prev] : [...prev, filter]
    );
  };
  return (
    <button className="tag" onClick={(e) => _handleOnClick(e)}>
      {name}
    </button>
  );
}

export default Tag;
