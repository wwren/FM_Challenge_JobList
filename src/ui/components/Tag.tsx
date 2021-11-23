import React from "react";
import "../../assets/css/Tag.css";
import { ChildProps } from "../../types/types";

function Tag(props: ChildProps) {
  return <span className="tag">{props.children}</span>;
}

export default Tag;
