import React, { Component } from "react";

// Fake Data
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

// Utilities
import { paginate } from "../utils/paginate";

// Components
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres
    });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ currentPage: 1, selectedGenre: genre });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    // filtering the data based on selected genre
    const filterd =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    // sort the filtered data
    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order]);

    // paginate the data
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              textProperty="name"
              valueProperty="_id"
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>

          <div className="col">
            <p>Showing {filterd.length} movies in the database</p>

            <MoviesTable
              movies={movies}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />

            <Pagination
              itemsCount={filterd.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
