import { useState } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '../../app/hooks';
import { updateCurrentSearch, updateSearchHistory } from '../search/searchSlice';

const Input = styled.input`
  font-family: sans-serif;
  font-size: 16px;
  outline: none;
  border: none;
  background: none;
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  background-color: white;
  padding: 8px 12px;
  width: stretch;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const Search = () => {
  const [term, setTerm] = useState('');
  const dispatch = useAppDispatch();
  const handleChange = ({ target: { value } }: any) => {
    setTerm(value);
  };
  const handleKeyPress = ({ code }: any) => {
    if (code === 'Enter') {
      if (!term) {
        dispatch(updateCurrentSearch('popular'));
        dispatch(updateSearchHistory('popular'));
      } else {
        dispatch(updateCurrentSearch(term));
        dispatch(updateSearchHistory(term));
      }
      setTerm('');
    }
  };
  return (
    <Input
      placeholder="Search..."
      value={term}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};
