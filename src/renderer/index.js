import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import reducer from "../store/reducer";
import { Provider } from "react-redux";
import Index from "../pages/Index";
import Navbar from "../pages/Navbar";
import MovieDetails from "../pages/Movie_Details";
import Authentication from "../pages/Authentication";
import Authentication_SignUp from "../pages/Authentication_Signup";

const rootElement = document.getElementById("root");
const store = createStore(reducer);
const routing = (
  <Router>
    <Provider store={store}>
      <Navbar />
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Authentication} />
      <Route path="/signup" component={Authentication_SignUp} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Provider>
  </Router>
);
ReactDOM.render(routing, rootElement);
