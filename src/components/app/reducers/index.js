import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';

const reducers = combineReducers({ movies: moviesReducer });

export default reducers;
