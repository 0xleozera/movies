import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetch from '../../../__helpers__/fetch';
import movies from '../../../__helpers__/movies';
import movie from '../../../__helpers__/movie';
import fetchMoviesSuccess from '../../../__helpers__/fetch-movies-success';
import fetchMoviesFalling from '../../../__helpers__/fetch-movies-falling';

import { FETCH_MOVIES, FETCH_MOVIE_DETAILS } from '../../../../components/app/constants';
import * as actions from '../../../../components/app/actions';

const mockStore = configureMockStore([ thunk ]);

const store = mockStore({
  moviesFound: [],
  movieDetails: {}
});

describe('[Redux] action creators', () => {
  it('getMovies should dispatch an FETCH_MOVIES action', () => {
    expect(actions.getMovies(movies))
      .toEqual({ type: FETCH_MOVIES, payload: movies });
  });

  it('getMovieDetails should dispatch an FETCH_MOVIE_DETAILS action', () => {
    expect(actions.getMovieDetails(movie))
      .toEqual({ type: FETCH_MOVIE_DETAILS, payload: movie });
  });

  afterEach(() => store.clearActions());

  it('successful fetchMovies call getMovies', () => {
    window.fetch = fetch.successful(fetchMoviesSuccess);

    const expectedActions = [{ type: FETCH_MOVIES, payload: fetchMoviesSuccess }];

    return store.dispatch(actions.fetchMovies('Harry Potter')).then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('falling fetchMovies call getMovies', () => {
    window.fetch = fetch.successful(fetchMoviesFalling);

    const expectedActions = [{ type: FETCH_MOVIES, payload: fetchMoviesFalling }];

    return store.dispatch(actions.fetchMovies('auhsahsuah')).then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
