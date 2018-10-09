import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from '../constants';
import MovieService from '../../../service/movie-service';

export const getMovies = (data) => ({ type: FETCH_MOVIES, payload: data });

export const getMovieDetails = (data) => ({ type: FETCH_MOVIE_DETAILS, payload: data });

export const fetchMovies = (search) => async dispatch => {
  const movies = await MovieService.searchMovies(search);

  if (movies.success) {
    return dispatch(getMovies(movies.data));
  }

	return dispatch(getMovies([]));
};

export const fetchMovieDetails = (id) => async dispatch => {
	const movieDetails = await MovieService.searchMovieById(id);

  if (movieDetails.success) {
    return dispatch(getMovieDetails(movieDetails.data));
  }

	return dispatch(getMovieDetails({}));
};
