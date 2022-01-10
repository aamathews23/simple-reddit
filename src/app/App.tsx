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

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${props => props.theme.textOnSurface};
  background-color: ${props => props.theme.surface};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    display: none;
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    width: 40%;
  }
`;

export const App = () => {
  const { isDark, dark, light } = useAppSelector(state => state.theme);
  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <Header />
      <Container>
        <Sidebar>
          <SearchHistory />
        </Sidebar>
        <PostGrid />
      </Container>
    </ThemeProvider>
  );
};
