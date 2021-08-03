import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { AppState } from '../index';

export const getQueryParamSelector = (state: AppState) => state.searchParam;

export const selectMovies = (state: AppState) => state.data;

const selectRouterState = createFeatureSelector<RouterReducerState>('router');
const { selectRouteParams } = getSelectors(selectRouterState);

export const selectCurrentMovie = createSelector(
  selectMovies,
  selectRouteParams,
  (movies, { id }) => movies.find(item => item.imdbID === id)
);
