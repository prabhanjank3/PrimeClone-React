import React from "react";

export default props => {
  return (
    <div>
      <p className="movie-description">{props.plot}</p>
      <p>
        <strong>Directed By:</strong> {props.director}
      </p>
      <p>
        <strong>Starring:</strong> {props.starring.join(", ")}
      </p>
      <p>
        <strong>Genre:</strong> {props.genre.join(", ")}
      </p>
    </div>
  );
};
