import { MoviesModel } from './movies.model';

export interface ResponseModel {
  Search: MoviesModel[];
  Response: string;
  totalResults: string;
}
