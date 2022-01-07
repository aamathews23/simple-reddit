import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export interface PostCardType {
  title: string;
  description: string;
  image: string;
  subreddit: string;
  author: string;
  ups: number;
  url: string;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-family: sans-serif;

  &:hover, &:focus {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 16px;
  letter-spacing: 0.4px;
  word-break: break-all;
  margin: 0px;
  padding: 12px 12px 0px 12px;
`;

const FooterItem = styled.p`
  font-size: 16px;
  margin: 0px 8px 0px 0px;
  color: #565656;

  & > * {
    color: #565656;
  }
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0px;
  padding: 0px 12px;
  word-break: break-all;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover, &:focus {
    color: inherit;
    text-decoration: underline;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  background-color: #f6f6f6;
  padding: 8px 8px 8px 8px;
`;

export const PostCard = ({ title, image, description, subreddit, author, ups, url }: PostCardType) => {
  const cardHeader = (
    <Header>
      <Title>
        <Link
          href={`https://www.reddit.com${url}`}
          target="_blank"
        >
          {
            image === 'nsfw' && '[NSFW] '
          }
          {
            title
          }
        </Link>
      </Title>
    </Header>
  );
  const cardBody = (
    <Body>
      {
        image && image !== 'self' && image !== 'default' && image !== 'nsfw' ?
        <img src={image} alt="Post" /> :
        <Description>
          {
            description.length > 300 ?
            `${description.substring(0, 300)}...` :
            description
          }
        </Description>
      }
    </Body>
  );
  const cardFooter = (
    <Footer>
      <FooterItem>
        <FontAwesomeIcon icon={faHeart} /> {ups}
      </FooterItem>
      <FooterItem>
        <Link
          href={`https://www.reddit.com/r/${subreddit}`}
          target="_blank"
        >
          r/{subreddit}
        </Link>
      </FooterItem>
      <FooterItem>
        <Link
          href={`https://www.reddit.com/user/${author}`}
          target="_blank"
        >
          u/{author}
        </Link>
      </FooterItem>
    </Footer>
  );
  let style;
  if (image && image !== 'self' && image !== 'default' && image !== 'nsfw') {
    if (title && title.length > 100) {
      style = { gridRow: 'span 3' };
    } else {
      style = { gridRow: 'span 2' };
    }
  } else if (description) {
    style = { gridRow: 'span 2' };
  } else {
    style = {};
  }
  return (
    <Card style={style}>
      {cardHeader}
      {cardBody}
      {cardFooter}
    </Card>
  );
};
