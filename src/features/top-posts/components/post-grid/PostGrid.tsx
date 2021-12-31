import styled from 'styled-components';

// Import features
import { PostCard } from '../post-card/PostCard';

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
  );
};
