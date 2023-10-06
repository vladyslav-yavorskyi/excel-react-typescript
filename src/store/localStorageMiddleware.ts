import { Middleware } from 'redux';
import { RootState } from './store';

export const localStorageMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const result = next(action);
    const stateToPersist = store.getState().cellReducer;
    console.log(action.type);

    localStorage.setItem(
      'excel:' + window.location.pathname.split('/')[2],
      JSON.stringify(stateToPersist)
    );
    return result;
  };
