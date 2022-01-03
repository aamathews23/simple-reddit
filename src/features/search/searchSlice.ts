import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  currentSearch: string;
  history: string[];
}

const initialState: SearchState = {
  currentSearch: 'popular',
  history: ['popular'],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateCurrentSearch: (state, action: PayloadAction<string>) => {
      state.currentSearch = action.payload;
    },
    updateSearchHistory: (state, action: PayloadAction<string>) => {
      state.history = [action.payload, ...state.history];
    },
  }
});

export const { updateCurrentSearch, updateSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
