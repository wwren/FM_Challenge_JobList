import React from "react";

interface Props {
  children: React.ReactNode;
}

function Content(props: Props) {
  return <main className="main">{props.children}</main>;
}

export default Content;
