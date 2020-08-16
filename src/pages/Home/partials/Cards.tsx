import React, { ReactElement } from "react";
import { Row, Col } from "reactstrap";

interface Props {
  children: React.ReactNodeArray | React.ReactNode;
}

function Cards(props: Props): ReactElement {
  return (
    <Row>
      {Array.isArray(props.children) ? (
        props.children.map((child, key) => (
          <Col sm={6} md={3} className="mb-3" key={key}>
            {child}
          </Col>
        ))
      ) : (
        <Col sm={4} md={3} className="mb-3">
          {props.children}
        </Col>
      )}
    </Row>
  );
}

export default Cards;
