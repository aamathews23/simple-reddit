import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Import global components
import { Drawer } from '../../components/Drawer';

// Import features
import { SearchBar } from '../search/SearchBar';
import { Text } from '../../components/Text';

const Container = styled.div`
  display: inherit;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;
  font-size: 25px;

  @media screen and (max-width: 600px) {
    display: inherit;
  }
`;

export const Search = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const handleOnOpen = () => {
    document.body.setAttribute('style', 'overflow: hidden;');
    setShowDrawer(true);
  };
  const handleOnClose = () => {
    document.body.setAttribute('style', 'overflow: auto;');
    setShowDrawer(false);
  };
  return (
    <>
      <Container>
        <SearchBar />
      </Container>
      <MobileContainer>
        <FontAwesomeIcon icon={faSearch} onClick={handleOnOpen} style={{ margin: 8}} />
        {
          showDrawer &&
          <Drawer onClose={handleOnClose}>
            <Text modifier="h2" style={{ margin: 8 }}>Search</Text>
            <Text style={{ margin: 8 }}>Search anything on the Reddit site.</Text>
            <Text style={{ margin: 8 }}>Type your query and press enter to search!</Text>
            <SearchBar />
          </Drawer>
        }
      </MobileContainer>
    </>
  );
};
