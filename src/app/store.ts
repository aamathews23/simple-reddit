import { AnyAction, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import search from '../features/search/searchSlice';
import posts from '../features/posts/postsSlice';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = configureStore({
  reducer: {
    search,
    posts,
  },
  enhancers: [
    composedEnhancer,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;