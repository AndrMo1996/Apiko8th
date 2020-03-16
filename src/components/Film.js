import React from "react";
import FilmList from "./FilmList";

class Film extends React.Component {
  render() {
    return (
      <div>
          <h2>{this.props.movieData.title}</h2>
        <img
          src={`http://image.tmdb.org/t/p/w185${
            this.props.movieData.poster_path
          }`}
          alt={this.props.movieData.title}
        />
        <p>{this.props.movieData.overview}</p>
        <h5>Recommendations</h5>
        <FilmList
          getDataMethod={this.props.getDataMethod}
          moviesData={this.props.recommendations}
        />
      </div>
    );
  }
}

export default Film;
