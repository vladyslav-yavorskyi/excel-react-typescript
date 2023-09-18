export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const stateToPersist = store.getState();
    localStorage.setItem('myAppReduxState', JSON.stringify(stateToPersist));
    return result;
  };
