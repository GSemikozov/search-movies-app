import {Action, createReducer, on} from '@ngrx/store';
import { MoviesModel } from '../models/movies.model';
import { loadMoviesSuccess, loadMoviesFailure, searchMovies } from '../actions/movies.actions';

export const moviesInitialState: MoviesModel[] = [];
export const moviesSearchParamInitialState: string = 'People';

const _moviesReducer = createReducer(
  moviesInitialState,
  on(
    loadMoviesSuccess, (state, { data }) => {
      return [...data];
    }),
  on(loadMoviesFailure, (state, { error }) => {
    return error;
  })
);

export function moviesReducers(state: MoviesModel[] | undefined, action: Action) {
  return _moviesReducer(state, action);
}

export const _searchMoviesReducer = createReducer(
  moviesSearchParamInitialState,
  on(searchMovies, (state, { searchParam }) => searchParam)
);

export function searchMoviesReducer(state: string | undefined, action: Action) {
  return _searchMoviesReducer(state, action);
}

