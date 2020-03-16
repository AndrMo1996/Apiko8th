import React from "react";

class Search extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.method("search")}>
        <input type="text" name="search" placeholder="search" />
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
