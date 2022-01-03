import { configureStore } from '@reduxjs/toolkit';
import search from '../features/search/searchSlice';
import posts from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    search,
    posts,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;