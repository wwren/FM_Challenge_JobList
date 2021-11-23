import React from "react";
import { ChildProps } from "../../types/types";

function Content(props: ChildProps) {
  return <main className="main">{props.children}</main>;
}

export default Content;
