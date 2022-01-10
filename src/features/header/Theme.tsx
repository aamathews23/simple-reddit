import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleDarkMode } from './themeSlice';

const Container = styled.div`
  font-size: 30px;
  margin: 16px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
    margin: 8px;
  }
`;

export const Theme = () => {
  const isDark = useAppSelector(state => state.theme.isDark);
  const dispatch = useAppDispatch();
  const handleIconClick = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <Container>
      {
        isDark ?
          <FontAwesomeIcon
            icon={faMoon}
            onClick={handleIconClick}
          /> :
          <FontAwesomeIcon
            icon={faSun}
            onClick={handleIconClick}
          />
      }
    </Container>
  );
};
