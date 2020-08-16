import React, { ReactElement } from "react";
import { Row, Col } from "reactstrap";

interface Props {
  count: number;
  query: string;
  activePage: number;
}

function ResultsInfo(props: Props): ReactElement {
  return (
    <div className="mb-3 d-flex justify-content-between">
      <div>
        <span>"{props.query}"</span> has {props.count} results on{" "}
        {Math.floor(props.count / 10)} pages
      </div>
      <div>Page {props.activePage}</div>
    </div>
  );
}

export default ResultsInfo;
