import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import {MoviesActionsEnum} from "../actions/movies.actions";

@Injectable()
export class MoviesEffect {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadmovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActionsEnum.searchMovies),
      // @ts-ignore
      map(action => action.searchParam),
      switchMap((searchParam) =>
        this.moviesService
          .loadMovies(searchParam)
          .pipe(map((movies) => ({ type: MoviesActionsEnum.loadMoviesSuccess, data: movies })))
      )
    )
  );
}
