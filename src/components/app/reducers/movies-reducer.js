import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from '../constants';
import initialState from './initial-state';

const movies = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIES:
			return {
        ...state,
        moviesFound: action.payload,
      }
		case FETCH_MOVIE_DETAILS:
			return {
        moviesFound: { ...state.moviesFound.Response },
				movieDetails: action.payload,
			};
		default:
			return state;
	}
}

export default movies;
