import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovies } from "../Redux/MovieReducer/action";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { isAuth } = useSelector((state) => state.auth);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movie = movies.find((movie) => movie.id === parseInt(id));
    setMovie({ ...movie });
  }, [id, movies]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (!isAuth) return <Navigate to={`/login?redirect=/movie/${id}`} />;

  console.log(movie, movies);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h3 className="movie-id">ID: {movie.id}</h3>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
      <p className="movie-name">{movie.Title}</p>
      <p className="movie-year">{movie.Year}</p>
      <p className="movie-type">{movie.Type}</p>
      <p className="movie-rating">{movie.rating}</p>
    </div>
  );
};

export default MovieDetail;
