import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  loadMovies(path: string) {
    return this.http
      .get('https://www.omdbapi.com', {
        params: {
          apikey: "525cae7e",
          s: path
        }
      })
      .pipe(map((movies: any) => movies))
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
