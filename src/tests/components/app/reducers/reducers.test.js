import { FETCH_MOVIES } from '../../../../components/app/constants';

import reducer from '../../../../components/app/reducers/movies-reducer';

import movies from '../../../__helpers__/movies';

describe('[Redux] reducers', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({ moviesFound: [], movieDetails: {} });
  });

  it('should handle FETCH_MOVIES action', () => {
    expect(reducer({}, { type: FETCH_MOVIES, payload: movies })).toEqual({ moviesFound: movies });
  });

});
