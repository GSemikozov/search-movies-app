import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesModel } from '../../store/models/movies.model';
import { Store } from '@ngrx/store';
import { MoviesSearchParamService } from '../../store/services/movies-search-param.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  constructor(
    private store: Store<{ data: MoviesModel[] }>,
    private searchParamService: MoviesSearchParamService
  ) { }

  handleSubmit() {
    this.searchParamService.setSearchParam(this.searchForm.value.query);
    this.searchForm.reset();
  }
}
