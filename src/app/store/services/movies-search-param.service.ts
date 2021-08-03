import { Injectable } from '@angular/core';
import { searchMovies } from '../actions/movies.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../index';

@Injectable({
  providedIn: 'root'
})
export class MoviesSearchParamService {
  constructor(private store: Store<AppState>) { }

  setSearchParam(searchParam: string) {
    this.store.dispatch(searchMovies({ searchParam: searchParam }));
  }
}
