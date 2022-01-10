import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { updateCurrentSearch, updateSearchHistory } from '../search/searchSlice';

// Import global components
import { Text } from '../../components/Text';

const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  word-break: break-all;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: sans-serif;
  font-size: 16px;
  padding: 8px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textOnPrimary};
  margin: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  &:hover, &:focus {
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.primaryDark};
    color: ${props => props.theme.textOnPrimaryDark};
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
    <>
      <Text modifier="h2" style={{ padding: 8, borderRadius: '4px 4px 0px 0px' }}>Search History</Text>
      <Text style={{ margin: 8 }}>View your search history here. Click on a previous search to quickly run that search again.</Text>
      <Text style={{ margin: 8 }}>Your current search is denoted with a star and will always be at the top of the list!</Text>
      <List>
        {
          slicedHistory.map((item, index) => (
            <Item
              key={index}
              onClick={() => handleItemClick(item)}
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
    </>
  );
};
