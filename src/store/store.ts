import { configureStore } from '@reduxjs/toolkit';
import cellReducer from './features/cellSlice';
import { localStorageMiddleware } from './localStorageMiddleware';

const persistedState = JSON.parse(
  localStorage.getItem('myAppReduxState') || '{}'
);

export const store = configureStore({
  reducer: {
    cellReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
  preloadedState: persistedState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
