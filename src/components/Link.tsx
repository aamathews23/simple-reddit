import styled from 'styled-components';

const Container = styled.a`
  color: inherit;
  text-decoration: none;

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
