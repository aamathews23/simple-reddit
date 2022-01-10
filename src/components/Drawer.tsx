import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

const Foreground = styled.div`
  height: 100vh;
  width: 80%;
  padding: 4px 12px;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: ${props => props.theme.surface};
  color: ${props => props.theme.textOnSurface};
`;

const Background = styled.div`
  height: 100vh;
  width: 20%;
  background-color: #00000099;
`;

export interface DrawerType {
  children: React.ReactNode;
  onClose: () => void;
}

export const Drawer = ({ children, onClose }: DrawerType) => {
  return (
    <Container>
      <Foreground>
        {children}
      </Foreground>
      <Background onClick={onClose} />
    </Container>
  );
};
