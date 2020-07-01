import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Link to={"/movie/" + props.imdbID}>
      <Card className="movie-card">
        <Card.Img
          className="movie-card-image"
          src={props.Poster}
          alt={props.Title}
        />
      </Card>
    </Link>
  );
};
