import { configureStore } from '@reduxjs/toolkit';
import cellReducer from './features/cellSlice';
import localReducer from './features/localSlice';
import { Doc } from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { bind, enhanceReducer } from 'redux-yjs-bindings';

export const store = configureStore({
  reducer: {
    cellReducer: enhanceReducer(cellReducer),
    localReducer,
  },
});

const yDoc = new Doc();

const webrtcOptions = {
  signaling: ['ws://localhost:3000'],
};

new WebrtcProvider(
  'redux-yjs-bindings-cra-redux-typescript-example',
  yDoc,
  // All fields are actually optional, this is currently typed wrong in yjs
  webrtcOptions as any
);

bind(yDoc, store, 'cellReducer');

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
