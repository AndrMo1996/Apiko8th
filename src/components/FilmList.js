import React from "react";
import FilmListItem from "./FilmListItem";

class FilmList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.moviesData.map(item => (
            <FilmListItem
              getDataMethod={this.props.getDataMethod}
              key={item.id}
              data={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FilmList;
