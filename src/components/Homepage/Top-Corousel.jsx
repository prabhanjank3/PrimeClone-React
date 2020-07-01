import React from "react";
import { Carousel } from "react-bootstrap";

const getCarouselSlide = item => {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100 top-carousel-img"
        src={item.Poster}
        alt="First slide"
      />
    </Carousel.Item>
  );
};

export default props => {
  return (
    <Carousel className="top-carousel">
      {props.itemList.map(getCarouselSlide)}
    </Carousel>
  );
};
