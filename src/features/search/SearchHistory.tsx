import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Import global components
import { Text } from '../../components/Text';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCurrentSearch, updateSearchHistory } from '../search/searchSlice';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    display: none;
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    width: 40%;
  }
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
  background-color: ${props => props.color === '#fff' ? '#6122d0' : '#9952ff'};
  color: ${props => props.color};
  margin: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  &:hover, &:focus {
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    background-color: #20009e;
    color: #fff;
  }

  svg {
    margin-right: 4px;
  }
`;

export const SearchHistory = () => {
  const history = useAppSelector(state => state.search.history);
  const currentSearch = useAppSelector(state => state.search.currentSearch);
  const slicedHistory = history.slice(0, 16);
  const dispatch = useAppDispatch();
  const formatItem = (item: string) => {
    if (item && item.length > 32) {
      return `${item.substring(0, 32)}...`;
    }
    return item;
  };
  const handleItemClick = (item: string) => {
    dispatch(updateCurrentSearch(item));
    if (slicedHistory && !slicedHistory.includes(item)) {
      dispatch(updateSearchHistory(item));
    }
  };
  return (
    <Sidebar>
      <Text modifier="h2" style={{ padding: 8, backgroundColor: '#6122d0', color: '#fff', borderRadius: '4px 4px 0px 0px' }}>Search History</Text>
      <Text style={{ margin: 8 }}>View your search history here. Click on a previous search to quickly run that search again.</Text>
      <Text style={{ margin: 8 }}>Your current search is denoted with a star and will always be at the top of the list!</Text>
      <List>
        {
          slicedHistory.map((item, index) => (
            <Item
              key={index}
              onClick={() => handleItemClick(item)}
              color={currentSearch === item ? '#fff' : '#000'}
            >
              {
                currentSearch === item &&
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
