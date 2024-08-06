import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Redux/MovieReducer/action";
import MovieCard from "./MovieCard";
import "./MovieList.css";
// import './MovieList.css'; // Make sure to create this CSS file for styling

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, isError, rating, order_by } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(movies, isLoading, isError, rating, order_by);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movies.</p>;

  return (
    <div data-testid="movie-list" className="movie-list">
      {movies
        .filter((movie) => {
          if (rating.length > 0) {
            return rating.includes(movie.rating);
          } else {
            return movie;
          }
        })
        .sort((a, b) => {
          if (order_by === "asc") {
            return a.Title.localeCompare(b.Title);
          } else if (order_by === "dsc") {
            return b.Title.localeCompare(a.Title);
          }
          return 0;
        })
        .map((movie) => (
          <React.Fragment key={movie.id}>
            <MovieCard movie={movie} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default MovieList;
