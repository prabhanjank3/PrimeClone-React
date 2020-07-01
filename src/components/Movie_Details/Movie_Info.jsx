import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default props => {
  return (
    <Container>
      <Row className="movie-info-row">
        <Col lg={4}>
          <Container>
            <Row>
              <Col xs={6}>
                <strong>IMDB</strong>
              </Col>
              <Col xs={6}>{props.imdbRating}/10</Col>
            </Row>
          </Container>
        </Col>
        <Col lg={2} xs={6}>
          {props.runTime}
        </Col>
        <Col lg={2} xs={6}>
          {props.released}
        </Col>
      </Row>
    </Container>
  );
};
