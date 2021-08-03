import { MoviesService } from './movies.service';
import { MoviesModel } from '../models/movies.model';
import { MOVIES } from '../mocks/movies.mock';
import { HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from "../../helpers";

describe('MoviesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: MoviesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MoviesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected movies (HttpClient called once)', (done: DoneFn) => {
    const expectedMovies: MoviesModel[] = MOVIES;

    httpClientSpy.get.and.returnValue(asyncData(expectedMovies));

    service.loadMovies("People").subscribe(
      movies => {
        expect(movies)
          .withContext('expected movies ' + expectedMovies);
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).withContext('one call ' + 1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: ' 404 Not Found',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    service.loadMovies("People").subscribe(
      movies => done.fail('expected an error, not movies'),
      error => {
        expect(error).toContain('404 Not Found');
        done();
      }
    );
  });
});
