import React from "react";

class FilmListItem extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.getDataMethod("recommendations", this.props.data)}
      >
        <a
          href={`https://www.themoviedb.org/movie/${this.props.data.id}-${
            this.props.data.title
          }`}
        >
          {this.props.data.title}
        </a>
      </li>
    );
  }
}

export default FilmListItem;
