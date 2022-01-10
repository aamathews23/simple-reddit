import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

// Import global components
import { Drawer } from '../../components/Drawer';

// Import features
import { SearchHistory } from '../search/SearchHistory';
import { useState } from 'react';

const Container = styled.div`
  display: none;
  font-size: 25px;

  @media screen and (max-width: 600px) {
    display: inherit;
  }
`;

export const History = () => {
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
    <Container>
      <FontAwesomeIcon icon={faHistory} onClick={handleOnOpen} />
      {
        showDrawer &&
          <Drawer onClose={handleOnClose}>
            <SearchHistory />
          </Drawer>
      }
    </Container>
  );
};
