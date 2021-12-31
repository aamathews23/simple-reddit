import styled from 'styled-components';

// Import features
import { PostCard } from './components/post-card/PostCard';

const Container = styled.div`
  padding: 24px;
  margin: auto;
  overflow-y: scroll;
  height: 94vh;
  box-sizing: border-box;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: fit-content;
  grid-auto-flow: dense;
  width: 70%;
  margin: auto;
`;

export interface PostGridType {
  posts: any[];
}

export const PostGrid = ({ posts }: PostGridType) => {
  return (
    <Container>
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
      </Grid>
    </Container>
  );
};
