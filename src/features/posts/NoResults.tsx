import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 24px;
  color: ${props => props.theme.error};

  svg {
    font-size: 100px;
    margin-bottom: 16px;
  }
`;

export interface NoResultsType {
  text?: string;
}

export const NoResults = ({ text }: NoResultsType) => (
  <Container>
    <FontAwesomeIcon icon={faSadCry} />
    {text}
  </Container>
);
