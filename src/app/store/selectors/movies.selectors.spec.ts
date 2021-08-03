import { getQueryParamSelector, selectMovies, selectCurrentMovie } from './movies.selectors';
import { AppState } from '../';
import { MOVIES } from '../mocks/movies.mock';

describe('Selectors', () => {
  const initialState: AppState = {
    data: MOVIES,
    searchParam: 'People',
    router: {}
  };

  const expectedMovieId = 'tt0094862';

  const routerParam = { id: expectedMovieId };

  it('should select the query param', () => {
    const result = getQueryParamSelector(initialState);
    expect(result).toBeDefined();
    expect(result).toBe(initialState.searchParam);
  });

  it('should select the movies list', () => {
    const result = selectMovies(initialState);
    expect(result.length).toEqual(10);
    expect(result[1].imdbID).toEqual('tt0094862');
  });

  it('should select the movie', () => {
    const result = selectCurrentMovie.projector(
      initialState.data,
      routerParam
    )!;
    expect(result.imdbID).toEqual(expectedMovieId);
  });
});
