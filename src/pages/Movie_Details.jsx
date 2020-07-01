import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import MoviePoster from "../components/Movie_Details/Movie_Poster";
import MovieDescription from "../components/Movie_Details/Movie_Description";
import MovieHeading from "../components/Movie_Details/Movie_Heading";
import MovieInfo from "../components/Movie_Details/Movie_Info";
import Loading from "./Loading";
import { connect } from "react-redux";
import Auth from "./Authentication";
import Navbar from "../components/Navbar/Navbar";
import "../styles.css";

class Movie_Details extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      movie_details: {}
    };
  }
  render() {
    return this.props.isLoggedIn ? (
      this.state.isLoaded ? (
        <Container>
          <Row className="movie-heading-row">
            <Col>
              <MovieHeading heading={this.state.movie_details.Title} />
            </Col>
          </Row>
          <Row>
            <Col className="col" lg={3} md={12} sm={12} xs={12}>
              <MoviePoster href={this.state.movie_details.Poster} />
            </Col>
            <Col className="description-col">
              <MovieInfo
                imdbRating={this.state.movie_details.imdbRating}
                runTime={this.state.movie_details.Runtime}
                released={this.state.movie_details.Released}
              />
              <MovieDescription
                plot={this.state.movie_details.Plot}
                director={this.state.movie_details.Director}
                starring={this.state.movie_details.Actors}
                genre={this.state.movie_details.Genre}
              />
            </Col>
          </Row>
          <Row className="watch-now-row">
            <Col className="col" lg={3} xs={12}>
              <Button className="watch-now-btn">
                <FaPlay className="play-btn" />
                Watch Now
              </Button>
            </Col>
            <Col />
            <Col />
          </Row>
        </Container>
      ) : (
        <Loading />
      )
    ) : (
      <Auth />
    );
  }
  componentDidMount() {
    const FINAL_URL =
      "https://7y34o-9090.sse.codesandbox.io/movie/" +
      this.props.match.params.id;
    axios.get(FINAL_URL).then(response => {
      this.setState(prevState => {
        return {
          ...prevState,
          movie_details: response.data[0],
          isLoaded: true
        };
      });
    });
  }
}
const mapStateToProps = state => {
  return {
    home_display: state.home_display,
    home_display_data_loaded: state.home_display_data_loaded,
    isLoggedIn: state.isLoggedIn
  };
};
export default connect(mapStateToProps)(Movie_Details);
