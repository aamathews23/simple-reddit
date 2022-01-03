import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsState {
  posts: any[];
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
    loadPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = [...action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  }
});

export const { loadPosts, setIsLoading } = postsSlice.actions;
export default postsSlice.reducer;
