import styled from 'styled-components';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/posts/PostGrid';
import { SearchHistory } from '../features/search/SearchHistory';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 89vh;
  margin-top: 16px;

  @media screen and (max-width: 600px) {
    height: fit-content;
    flex-direction: column;
    margin: 0px;
  }
`;

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchHistory />
        <PostGrid />
      </Container>
    </>
  );
};
