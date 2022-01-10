import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit } from '@fortawesome/free-brands-svg-icons';

// Import global components
import { Link } from '../../components/Link';
import { Text } from '../../components/Text';

// Import components
import { Theme } from './Theme';
import { History } from './History';
import { Search } from './Search';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  box-sizing: border-box;
  padding: 16px 24px;
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.textOnSurface};
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 600px) {
    height: inherit;
    padding: 8px 8px;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index: 1;
  }
`;

const FunctionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px;

  svg {
    font-size: 40px;
    margin-right: 8px;
  }

  @media screen and (max-width: 600px) {
    font-size: 30px;
    height: 5vh;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Link
        href="https://www.reddit.com"
        target="_blank"
      >
        <Title>
          <FontAwesomeIcon icon={faReddit} />
          <Text modifier="h1">Simple</Text>
        </Title>
      </Link>
      <FunctionContainer>
        <Search />
        <History />
        <Theme />
      </FunctionContainer>      
    </Container>
  );
}
