import React, { ReactElement } from "react";
import { Row, Col } from "reactstrap";

interface Props {
  side1?: React.ReactNode;
  side2?: React.ReactNode;
}

function Header(props: Props): ReactElement {
  return (
    <>
      <Row className="align-items-center d-flex">
        {props.side1 && <Col md={6}>{props.side1}</Col>}
        {props.side2 && <Col md={6}>{props.side2}</Col>}
      </Row>
      <div className="divider" />
    </>
  );
}

export default Header;
