import React, { ReactElement } from "react";

interface Props {
  query: string;
}

function NotFound(props: Props): ReactElement {
  return (
    <div className="text-center m-5">
      <i className="fas fa-search mb-3" style={{ fontSize: 50 }}></i>
  <h1>{props.query === "" ? "Please Enter Movie Name For Search" : `"${props.query}" Has No Result`}</h1>
    </div>
  );
}

export default NotFound;
