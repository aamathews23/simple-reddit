import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDark: boolean;
  dark: any;
  light: any;
}

const initialState: ThemeState = {
  isDark: false,
  dark: {
    background: '#121212',
    surface: '#292929',
    primary: '#4b4b4b',
    primaryDark: '#4b4b4b',
    secondary: '#4b4b4b',
    secondaryLight: '#e7b9ee',
    error: '#ea949c',
    textOnPrimary: '#b999eb',
    textOnPrimaryDark: '#d5c2f2',
    textOnSecondary: '#d78ae3',
    textOnSurface: '#fff'
  },
  light: {
    background: '#e5e5e5',
    surface: '#fff',
    primary: '#6122d0',
    primaryDark: '#20009e',
    secondary: '#b922d0',
    secondaryLight: '#ef5fff',
    error: '#c1002c',
    textOnPrimary: '#fff',
    textOnPrimaryDark: '#fff',
    textOnSecondary: '#fff',
    textOnSurface: '#000'
  }
};

export const themeSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
    }
  }
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
