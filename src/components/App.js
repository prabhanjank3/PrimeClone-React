import React from "react";

export default function App(props) {
  console.log("In App COmponent: " + props.home_display);
  return (
    <div className="App">
      <h1>{props.home_display}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
