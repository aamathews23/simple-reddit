import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

// Import features
import { Search } from '../search/Search';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  box-sizing: border-box;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: white;

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
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin: 8px;
  color: #1c0d4a;

  svg {
    font-size: 40px;
    margin-right: 8px;
  }
`;

const Link = styled.a`
  font-family: sans-serif;
  color: #1c0d4a;
  text-decoration: none;
  font-size: 16px;

  &:hover, &:focus {
    color: #1c0d4a;
    text-decoration: underline;
  }

  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Title>
        <FontAwesomeIcon icon={faReddit} />
        Simple
      </Title>
      <Search />
      <Link href="https://www.reddit.com">www.reddit.com</Link>
    </Container>
  );
}
