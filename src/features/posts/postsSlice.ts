import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import { Post, loadPostsAPI } from './postAPI';

interface PostsState {
  posts: Post[];
  isLoading: boolean;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = [...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  }
});

export const thunkLoadPosts = (term: string): AppThunk => (
  async (dispatch) => {
    dispatch(setIsLoading(true));
    const posts: Post[] = await loadPostsAPI(term);
    dispatch(loadPosts(posts));
    dispatch(setIsLoading(false));
  }
);

export const { loadPosts, setIsLoading } = postsSlice.actions;
export default postsSlice.reducer;
