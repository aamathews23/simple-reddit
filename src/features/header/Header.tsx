import styled from 'styled-components';

// Import features
import { Search } from '../search/Search';

export interface HeaderType {
  handleSearch: (param: string) => void;
}

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  height: 6vh;
  box-sizing: border-box;
  padding: 0px 24px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.6px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 12px;

  &:hover, &:focus {
    color: black;
    text-decoration: underline;
  }
`;

export const Header = ({ handleSearch }: HeaderType) => {
  return (
    <HeaderBlock>
      <Title>SimpleReddit</Title>
      <Search handleSearch={handleSearch} />
      <Link
        href="https://www.reddit.com"
        target="_blank"
      >
        reddit.com
      </Link>
    </HeaderBlock>
  );
}
