export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const stateToPersist = store.getState().cellReducer;
    console.log(window.location.pathname);

    localStorage.setItem(
      'excel:' + window.location.pathname.split('/')[2],
      JSON.stringify(stateToPersist)
    );
    return result;
  };
