import styled from 'styled-components';

// Import features
import { PostCard } from './components/post-card/PostCard';

const Container = styled.div`
  padding: 24px;
  margin: auto;
  box-sizing: border-box;
  width: 75%;
  height: 94vh;
  overflow-y: scroll;

  @media screen and (max-width: 600px) {
    width: fit-content;
    height: fit-content;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: fit-content;
  grid-auto-flow: dense;
`;

const CenteredText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 24px;
`;

export interface PostGridType {
  posts: any[];
}

export const PostGrid = ({ posts }: PostGridType) => {
  return (
    <Container>
      {
        posts && posts.length > 0 ?
          <Grid>
            {
              posts.map((post, index) => (
                <PostCard
                  key={index}
                  title={post.title}
                  image={post.thumbnail}
                  description={post.description}
                  subreddit={post.subreddit}
                  author={post.author}
                  ups={post.ups}
                  downs={post.downs}
                  url={post.url}
                />
              ))
            }
          </Grid> :
          <CenteredText>No results found...</CenteredText>
      }
    </Container>
  );
};
