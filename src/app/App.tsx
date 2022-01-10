import styled, { ThemeProvider } from 'styled-components';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/posts/PostGrid';
import { SearchHistory } from '../features/search/SearchHistory';

import { useAppSelector } from './hooks';

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

export const App = () => {
  const { isDark, dark, light } = useAppSelector(state => state.theme);
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Header />
      <Container>
        <SearchHistory />
        <PostGrid />
      </Container>
    </ThemeProvider>
  );
};
