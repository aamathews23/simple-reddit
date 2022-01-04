import styled from 'styled-components';

export interface PostCardType {
  title: string;
  description: string;
  image: string;
  subreddit: string;
  author: string;
  ups: number;
  url: string;
}

const card = `
  border: 1px solid #c4c4c4;
  padding: 12px 12px 0px 12px;
  border-radius: 4px;

  &:hover, &:focus {
    background-color: #f6f6f6;
  }
`;

const ShortCard = styled.div`
  ${card}
`;

const TallCard = styled.div`
  ${card}
  grid-row: span 2;
`;

const XtraTallCard = styled.div`
  ${card}
  grid-row: span 3;
`;

const Title = styled.h3`
  font-family: sans-serif;
  font-size: 16px;
  letter-spacing: 0.4px;
  margin: 0px 0px 8px 0px;
`;

const Subtitle = styled.p`
  font-family: sans-serif;
  font-size: 12px;
  margin: 0px 0px 12px 0px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 12px 0px;
`;

const Description = styled.p`
  font-family: sans-serif;
  font-size: 12px;
  margin: 12px 0px;
  word-break: break-all;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover, &:focus {
    color: black;
    text-decoration: underline;
  }
`;

export const PostCard = ({ title, image, description, subreddit, author, ups, url }: PostCardType) => {
  const titleView = (
    <Title>
      <Link
        href={`https://www.reddit.com${url}`}
        target="_blank"
      >
        {
          image === 'nsfw' && '[NSFW] '
        }
        {
          title.length > 50 ?
          `${title.substring(0, 50)}...` :
          title
        }
      </Link>
    </Title>
  );
  const subtitleView = (
    <Subtitle>
      <Link
        href={`https://www.reddit.com/r/${subreddit}`}
        target="_blank"
      >
        <strong>r/{subreddit}</strong>
      </Link> | {ups}
    </Subtitle>
  );
  const imageView = (
    <Image>
      <img src={image} alt="Post" style={{height: 250, width: 250}} />
    </Image>
  );
  const descriptionView = (
    <Description>
      {
        description.length > 300 ?
        `${description.substring(0, 300)}...` :
        description
      }
    </Description>
  );
  const userView = (
    <Subtitle>
      <Link
        href={`https://www.reddit.com/user/${author}`}
        target="_blank"
      >
        <em>u/{author}</em>
      </Link>
    </Subtitle>
  );
  if (image && image !== 'self' && image !== 'default' && image !== 'nsfw') {
    return (
      <XtraTallCard>
        {titleView}
        {subtitleView}
        {imageView}
        {userView}
      </XtraTallCard>
    );
  } else if (description) {
    return (
      <TallCard>
        {titleView}
        {subtitleView}
        {descriptionView}
        {userView}
      </TallCard>
    );
  } else {
    return (
      <ShortCard>
        {titleView}
        {subtitleView}
        {userView}
      </ShortCard>
    );
  }
};
