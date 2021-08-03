import {Component, OnInit} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Store, select } from '@ngrx/store';
import { searchMovies } from '../../store/actions/movies.actions';
import { AppState } from '../../store';
import { getQueryParamSelector, selectMovies } from '../../store/selectors/movies.selectors';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$ = this.store.pipe(select(selectMovies));

  queryParam$ = this.store.pipe(select(getQueryParamSelector));

  breakpoint: number | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : (window.innerWidth > 1400) ? 3 : 2;
    this.movies$.subscribe((movies) => {
      if (!(movies.length > 0)) {
        this.queryParam$.subscribe((searchParam) => { // TODO: anti-pattern, rewrite it
          this.store.dispatch(searchMovies({ searchParam: searchParam }))
        })
      }
    })
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : (event.target.innerWidth > 1400) ? 3 : 2;
  }
}
