import { createAction, props } from '@ngrx/store';
import { MoviesModel } from "../models/movies.model";
import {ResponseModel} from "../models/response.model";

export enum MoviesActionsEnum {
  loadMovies = '[Movies API] Load Movies',
  loadMoviesSuccess = '[Movies API] Load Movies Success',
  loadMoviesFailure = '[Movies API] Load Movies Failure',
  searchMovies = '[Movies API] Search Movies'
}

export const loadMovies = createAction(
  MoviesActionsEnum.loadMovies
);

export const loadMoviesSuccess = createAction(
  MoviesActionsEnum.loadMoviesSuccess,
  props<{ data: ResponseModel; }>()
);

export const loadMoviesFailure = createAction(
  MoviesActionsEnum.loadMoviesFailure,
  props<{ error: any }>()
);

export const searchMovies = createAction(
  MoviesActionsEnum.searchMovies,
  props<{ searchParam: string }>()
);
