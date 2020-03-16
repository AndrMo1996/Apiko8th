import React from "react";
import Search from "./components/Search";
import FilmList from "./components/FilmList";
import Film from "./components/Film";

const API_KEY = "d871a7de74ea353a5fb3ced86c71556a";

class App extends React.Component {
  state = {
    lastEndpoint: undefined,
    list: undefined,
    component: undefined,
    error: undefined
  };

  getFilms(method = "trending", item = undefined) {
    return async e => {
      e.preventDefault();
      let component, response, URL;

      switch (method) {
        case "search":
          URL =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=
          ${e.target.elements.search.value}`;
          component = "list";
          break;
        case "recommendations":
          URL = `https://api.themoviedb.org/3/movie/${item.id}/recommendations?api_key=${API_KEY}`;
          component = "item";
          break;
        default:
          URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
          component = "list";
          break;
      }

      response = await fetch(URL);

      let data = await response.json();
      if (data.errors) {
        this.setState({
          component: "error",
          error: data.errors
        });
      } else {
        this.setState({
          list: data.results,
          component: component,
          item: item,
          error: undefined
        });
      }
      console.log(data);
    };
  }

  display(component) {
    switch (component) {
      case "list":
        return (
          <FilmList
            getDataMethod={this.getFilms.bind(this)}
            moviesData={this.state.list}
          />
        );
      case "item":
        return (
          <Film
            getDataMethod={this.getFilms.bind(this)}
            movieData={this.state.item}
            recommendations={this.state.list}
          />
        );
      case "error":
        return <p>{this.state.error}</p>;
      default:
        return;
    }
  }

  componentDidMount() {
    this.getFilms("trending")(new Event("init"));
  }

  render() {
    return (
      <div className="App">
        <Search method={this.getFilms.bind(this)} />
        {this.display(this.state.component)}
      </div>
    );
  }
}
export default App;
