import styled from 'styled-components';

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  height: 5vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin: 0px 24px;
`;

export const Header = () => {
  return (
    <HeaderBlock>
      <Title>SimpleReddit</Title>
    </HeaderBlock>
  );
}
