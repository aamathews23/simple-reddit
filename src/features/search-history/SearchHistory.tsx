import styled from 'styled-components';

export interface SearchHistoryType {
  history: string[];
  handleSearch: (param: string) => void;
}

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

export const SearchHistory = ({ history, handleSearch }: SearchHistoryType) => {
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
                onClick={() => handleSearch(item)}
              >
                {formatItem(item)}
              </GreyItem>
            );
          }
          else {
            return (
              <Item
                key={index}
                onClick={() => handleSearch(item)}
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
