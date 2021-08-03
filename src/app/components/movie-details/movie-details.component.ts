import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { ActivatedRoute, Router } from '@angular/router';
import { selectCurrentMovie } from "../../store/selectors/movies.selectors";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  movie$ = this.store.pipe(select(selectCurrentMovie));

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { }

  gotoMoviesBack() {
    this.router.navigate(['/movies']);
  }
}
