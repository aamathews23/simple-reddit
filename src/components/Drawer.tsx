import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #00000099;
`;

const Background = styled.div`
  height: 100vh;
  width: 80%;
  overflow-y: auto;
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.textOnSurface}
`;

export interface DrawerType {
  children: React.ReactNode;
  onClose: () => void;
}

export const Drawer = ({ children, onClose }: DrawerType) => {
  return (
    <Container onClick={onClose}>
      <Background>
        {children}
      </Background>
    </Container>
  );
};
