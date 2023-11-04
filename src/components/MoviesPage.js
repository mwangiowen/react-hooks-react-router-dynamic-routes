import React from "react";
import { Route, Switch } from "react-router-dom"; // Import Route and Switch
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails"; // Create a MovieDetails component

function MoviesPage({ movies, match }) {
  return (
    <div>
      <h1>Movies Page</h1>
      <MoviesList movies={movies} />

      {/* Define a nested route for MovieDetails */}
      <Switch>
        <Route
          path={`${match.url}/:movieId`}
          render={(props) => <MovieDetails {...props} movies={movies} />}
        />
      </Switch>
    </div>
  );
}

export default MoviesPage;
