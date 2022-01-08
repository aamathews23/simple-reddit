import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

// Import global components
import { Link } from '../../components/Link';

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
  color: #1c0d4a;

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

  svg {
    font-size: 40px;
    margin-right: 8px;
  }
`;

const LinkContainer = styled.div`
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
      <LinkContainer>
        <Link
          href="https://www.reddit.com"
          target="_blank"
        >
          www.reddit.com
        </Link>
      </LinkContainer>
    </Container>
  );
}
