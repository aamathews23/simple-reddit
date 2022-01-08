import styled from 'styled-components';

const text = `
  font-family: sans-serif;
  color: inherit;
  margin: 0px;
`;

const Heading = styled.h1`
  ${text}
  font-size: 30px;
  letter-spacing: 0.6px;
`;

const Subheading = styled.h3`
  ${text}
  font-size: 16px;
  letter-spacing: 0.4px;
`;

const Paragraph = styled.p`
  ${text}
  font-size: 14px
`;

export interface TextType {
  children: React.ReactNode;
  tag?: 'p' | 'h1' | 'h3';
  style?: React.CSSProperties;
}

export const Text = ({ children, tag = 'p', style }: TextType) => {
  switch(tag) {
    case 'h1':
      return <Heading style={style}>{children}</Heading>;
    case 'h3':
      return <Subheading style={style}>{children}</Subheading>
    default:
      return <Paragraph style={style}>{children}</Paragraph>
  }
};
