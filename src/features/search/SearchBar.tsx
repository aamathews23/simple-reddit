import { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCurrentSearch, updateSearchHistory } from './searchSlice';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${props => props.theme.textOnSurface};
  border-radius: 4px;
  padding: 8px 12px;
  font-family: 'Ubuntu', sans-serif;

  & > * {
    font-size: 20px;
    color: ${props => props.theme.textOnSurface};
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: none;
  margin-left: 8px;
`;

export const SearchBar = () => {
  const [term, setTerm] = useState('');
  const history = useAppSelector(state => state.search.history);
  const dispatch = useAppDispatch();
  const input = useRef(null);
  const handleContainerClick = () => {
    if (input && input.current) {
      (input.current as any).focus();
    } 
  };
  const handleChange = ({ target: { value } }: any) => {
    setTerm(value);
  };
  const handleKeyPress = ({ code }: any) => {
    if (code === 'Enter') {
      const newTerm = term || 'popular';
      dispatch(updateCurrentSearch(newTerm));
      if (history && !history.slice(0, 16).includes(newTerm)) {
        dispatch(updateSearchHistory(newTerm));
      }
      setTerm('');
    }
  };
  return (
    <Container onClick={handleContainerClick}>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        ref={input}
        value={term}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Container>
    
  );
};
