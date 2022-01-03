import styled from 'styled-components';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/posts/PostGrid';
import { CurrentSearch } from '../features/search/CurrentSearch';
import { SearchHistory } from '../features/search/SearchHistory';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 94vh;

  @media screen and (max-width: 600px) {
    height: fit-content;
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 12px 0px 0px 12px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          <CurrentSearch />
          <SearchHistory />
        </Sidebar>
        <PostGrid />
      </Container>
    </>
  );
};
