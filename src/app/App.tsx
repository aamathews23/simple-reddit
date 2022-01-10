import styled, { ThemeProvider } from 'styled-components';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/posts/PostGrid';
import { SearchHistory } from '../features/search/SearchHistory';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 92vh;
  padding: 16px;
  background-color: ${props => props.theme.background};
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    height: fit-content;
    flex-direction: column;
    margin: 0px;
  }
`;

const theme = {
  light: {
    background: '#e5e5e5',
    surface: '#fff',
    primary: '#6122d0',
    primaryDark: '#20009e',
    primaryLight: '#9952ff',
    secondary: '#b922d0',
    secondaryLight: '#ef5fff',
    error: '#c1002c',
    textOnPrimary: '#fff',
    textOnPrimaryDark: '#fff',
    textOnPrimaryLight: '#000',
    textOnSecondary: '#fff',
    textOnSurface: '#000',
    textOnError: '#fff',
  },
  dark: {
    background: '#121212',
    surface: '#292929',
    primary: '#4b4b4b',
    primaryDark: '#4b4b4b',
    secondary: '#4b4b4b',
    secondaryLight: '#e7b9ee',
    error: '#c1002c',
    textOnPrimary: '#b999eb',
    textOnPrimaryDark: '#d5c2f2',
    textOnSecondary: '#d78ae3',
    textOnSurface: '#fff',
  }
}

export const App = () => {
  return (
    <ThemeProvider theme={theme.dark}>
      <Header />
      <Container>
        <SearchHistory />
        <PostGrid />
      </Container>
    </ThemeProvider>
  );
};
