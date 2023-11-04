import React from "react";

function MovieDetails({ movies, match }) {
  // Access the movieId from match.params
  const movieId = match.params.movieId;

  // Get the movie details based on the movieId
  const movie = movies[movieId];

  return (
    <div>
      <h2>Movie Details</h2>
      {movie ? (
        <div>
          <h3>Title: {movie.title}</h3>
          <p>Movie ID: {movie.id}</p>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default MovieDetails;
