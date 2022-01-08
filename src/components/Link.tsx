import styled from 'styled-components';

const Container = styled.a`
  font-family: sans-serif;
  color: inherit;
  text-decoration: none;
  font-size: 16px;

  &:hover, &:focus {
    color: inherit;
    text-decoration: underline;
  }
`;

export interface LinkType {
  href: string;
  children: React.ReactNode;
  target?: string;
}

export const Link = ({ href, children, target }: LinkType) => (
  <Container
    href={href}
    target={target}
  >
    {children}
  </Container>
);
