import React from "react";
import MovieCard from "./MovieCard";

export default props => {
  const cardList = props.itemList.map(item => (
    <MovieCard Poster={item.Poster} Title={item.Title} imdbID={item.imdbID} />
  ));
  cardList.reverse();
  return <section className="flex">{cardList}</section>;
};
