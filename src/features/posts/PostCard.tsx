import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// Import global components
import { Link } from '../../components/Link';
import { Text } from '../../components/Text';

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
  background-color: ${props => props.theme.surface};

  &:hover, &:focus {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 12px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textOnPrimary};
  border-radius: 4px 4px 0px 0px;
  word-break: break-all;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 0px 12px;
  color: ${props => props.theme.textOnSurface};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  padding: 8px 8px 8px 8px;
  color: ${props => props.theme.textOnSurface};

  & > * {
    margin-right: 8px !important;
  }

  svg {
    color: ${props => props.theme.secondaryLight};
  }
`;

export const PostCard = ({ title, image, description, subreddit, author, ups, url }: PostCardType) => {
  const cardHeader = (
    <Header>
      <Text modifier="h3">
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
      </Text>
    </Header>
  );
  const cardBody = (
    <Body>
      {
        image && image !== 'self' && image !== 'default' && image !== 'nsfw' ?
        <img src={image} alt="Post" /> :
        <Text>
          {
            description.length > 300 ?
            `${description.substring(0, 300)}...` :
            description
          }
        </Text>
      }
    </Body>
  );
  const cardFooter = (
    <Footer>
      <Text modifier="b2">
        <FontAwesomeIcon icon={faHeart} /> {ups}
      </Text>
      <Text modifier="b2">
        <Link
          href={`https://www.reddit.com/r/${subreddit}`}
          target="_blank"
        >
          r/{subreddit}
        </Link>
      </Text>
      <Text modifier="b2">
        <Link
          href={`https://www.reddit.com/user/${author}`}
          target="_blank"
        >
          u/{author}
        </Link>
      </Text>
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
