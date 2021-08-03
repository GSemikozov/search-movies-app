import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MoviesModel } from "./models/movies.model";
import { moviesReducers, searchMoviesReducer } from "./reducers/movies.reducers";
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  data: MoviesModel[];
  searchParam: string;
  router: any;
}

export const reducers: ActionReducerMap<AppState> = {
  data: moviesReducers,
  searchParam: searchMoviesReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
