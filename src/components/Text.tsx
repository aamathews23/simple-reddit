import styled from 'styled-components';

const text = `
  color: inherit;
  margin: 0px;
`;

const Headline1 = styled.h1`
  ${text}
  font-family: 'Ubuntu', sans-serif;
  font-size: 49px;
`;

const Headline2 = styled.h2`
  ${text}
  font-family: 'Ubuntu', sans-serif;
  font-size: 35px;
  letter-spacing: 0.25px;
`;

const Headline3 = styled.h3`
  ${text}
  font-family: 'Ubuntu', sans-serif;
  font-size: 24px;
`;

const Body1 = styled.p`
  ${text}
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

const Body2 = styled.p`
  ${text}
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  letter-spacing: 0.25px;
`;

export interface TextType {
  children: React.ReactNode;
  modifier?: 'h1' | 'h2' | 'h3' | 'b1' | 'b2';
  style?: React.CSSProperties;
}

export const Text = ({ children, modifier = 'b1', style }: TextType) => {
  switch(modifier) {
    case 'h1':
      return <Headline1 style={style}>{children}</Headline1>;
    case 'h2':
      return <Headline2 style={style}>{children}</Headline2>
    case 'h3':
      return <Headline3 style={style}>{children}</Headline3>
    case 'b2':
      return <Body2 style={style}>{children}</Body2>
    default:
      return <Body1 style={style}>{children}</Body1>
  }
};
