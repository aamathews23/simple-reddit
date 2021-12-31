import { useState } from 'react';
import styled from 'styled-components';

export interface SearchType {
  handleSearch: (param: string) => void;
}

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
  width: 300px;
`;

export const Search = ({ handleSearch }: SearchType) => {
  const [term, setTerm] = useState('');
  const handleChange = ({ target: { value } }: any) => {
    setTerm(value);
  };
  const handleKeyPress = ({ code }: any) => {
    if (code === 'Enter') {
      handleSearch(term);
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
