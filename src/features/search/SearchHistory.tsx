import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';

import { useAppDispatch } from '../../app/hooks';
import { updateCurrentSearch } from '../search/searchSlice';

const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  word-break: break-all;
`;

const item = `
  font-family: sans-serif;
  font-size: 16px;
  padding: 8px 8px;

  &:hover, &:focus {
    background-color: #c4c4c4;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const GreyItem = styled.li`
  ${item}
  background-color: #f6f6f6;
`;

const Item = styled.li`
  ${item}
`;

export const SearchHistory = () => {
  const history = useAppSelector(state => state.search.history);
  const dispatch = useAppDispatch();
  const formatItem = (item: string) => {
    if (item && item.length > 32) {
      return `${item.substring(0, 32)}...`;
    }
    return item;
  };
  return (
    <List>
      {
        history.slice(0, 24).map((item, index) => {
          if (index % 2 === 0) {
            return (
              <GreyItem
                key={index}
                onClick={() => dispatch(updateCurrentSearch(item))}
              >
                {formatItem(item)}
              </GreyItem>
            );
          }
          else {
            return (
              <Item
                key={index}
                onClick={() => dispatch(updateCurrentSearch(item))}
              >
                {formatItem(item)}
              </Item>
            );
          }
        })
      }
    </List>
  );
};
