import React from "react";
import Corousel from "./Horizontal_Slider";
import Heading from "../general/Section-Title";
import TopCarousel from "./Top-Corousel";
export default props => {
  return (
    <section>
      <TopCarousel itemList={props.home_display.latest} />
      <Heading heading="Latest Movies" />
      <Corousel itemList={props.home_display.latest} />
      <Heading heading="Movies in Hindi" />
      <Corousel itemList={props.home_display.hindi} />
      <Heading heading="Movies in Comedy" />
      <Corousel itemList={props.home_display.comedy} />
      <Heading heading="Movies in Marathi" />
      <Corousel itemList={props.home_display.marathi} />
      <Heading heading="Movies in Thriller" />
      <Corousel itemList={props.home_display.thriller} />
      <Heading heading="Movies in Telugu" />
      <Corousel itemList={props.home_display.telugu} />
    </section>
  );
};
