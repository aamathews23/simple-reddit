import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCurrentSearch, updateSearchHistory } from '../search/searchSlice';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 16px 0px 16px 12px;
  box-sizing: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-family: sans-serif;
  margin: 8px;
`;

const Text = styled.p`
  font-family: sans-serif;
  font-size: 14px;
  margin: 8px;
`;

const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  word-break: break-all;
  height: 100%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: sans-serif;
  font-size: 16px;
  padding: 8px;
  background-color: #f6f6f6;
  margin: 8px;
  border-radius: 8px;

  &:hover, &:focus {
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 4px;
  }
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
  const handleItemClick = (item: string) => {
    dispatch(updateCurrentSearch(item));
    dispatch(updateSearchHistory(item))
  };
  return (
    <Sidebar>
      <Title>Search History</Title>
      <Text>View your search history here. Click on a previous search to quickly run that search again.</Text>
      <Text>Your current search is denoted with a star and will always be at the top of the list!</Text>
      <List>
        {
          history.slice(0, 16).map((item, index) => (
            <Item
              key={index}
              onClick={() => handleItemClick(item)}
            >
              {
                index === 0 &&
                <FontAwesomeIcon icon={faStar} />
              }
              {formatItem(item)}
            </Item>
          ))
        }
      </List>
    </Sidebar>
  );
};
