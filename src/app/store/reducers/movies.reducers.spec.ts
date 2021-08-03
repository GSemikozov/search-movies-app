import { moviesReducers, moviesInitialState } from './movies.reducers';
import { MoviesModel } from '../models/movies.model';
import { loadMoviesSuccess } from "../actions/movies.actions";
import { MOVIES } from "../mocks/movies.mock";

describe('Movies Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {
        type: 'Unknown',
      };

      const result = moviesReducers(moviesInitialState, action);

      expect(result).toBe(moviesInitialState);
    });
  });

  describe('loadMoviesSuccess action', () => {
    it('should retrieve all movies and update the state in an immutable way', () => {
      const newState: MoviesModel[] = [
        MOVIES[0],
      ];
      const action = loadMoviesSuccess({ data: newState });
      const state = moviesReducers(moviesInitialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
