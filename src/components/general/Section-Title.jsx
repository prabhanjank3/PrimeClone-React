import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default props => {
  return (
    <Container className="section-title-container">
      <Row className="section-title-row">
        <Col>
          <h5>{props.heading}</h5>
        </Col>
      </Row>
    </Container>
  );
};
