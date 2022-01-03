import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';

const Text = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  padding: 0px 0px 8px 0px;
  margin: 0px;
  border-bottom: 1px solid #c4c4c4;
  word-break: break-all;
`;

export const CurrentSearch = () => {
  const term = useAppSelector(state => state.search.currentSearch);
  return (
    <Text>
      current search: {term}
    </Text>
  );
};
