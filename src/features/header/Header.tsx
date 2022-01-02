import styled from 'styled-components';

// Import features
import { Search } from '../search/Search';

export interface HeaderType {
  handleSearch: (param: string) => void;
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  height: 6vh;
  box-sizing: border-box;
  padding: 16px 24px;

  @media screen and (max-width: 600px) {
    height: inherit;
    padding: 8px 8px;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin: 8px;
`;

const Link = styled.a`
  font-family: sans-serif;
  color: black;
  text-decoration: none;
  font-size: 16px;

  &:hover, &:focus {
    color: black;
    text-decoration: underline;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const Header = ({ handleSearch }: HeaderType) => {
  return (
    <Container>
      <Title>SimpleReddit</Title>
      <Search handleSearch={handleSearch} />
      <Link href="https://www.reddit.com">www.reddit.com</Link>
    </Container>
  );
}
