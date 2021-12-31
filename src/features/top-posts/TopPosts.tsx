import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import components
import { PostGrid } from './components/post-grid/PostGrid';

const Container = styled.div`
  padding: 24px;
  margin: auto;
  overflow-y: scroll;
  height: 95vh;
  box-sizing: border-box;
`;

export const TopPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => {
      (
        async () => {
          const response = await fetch('https://www.reddit.com/r/popular.json');
          const json = await response.json();
          console.log(json.data.children);
          const newPosts = json.data.children.map((post: any) => {
            return {
              author: post.data.author,
              subreddit: post.data.subreddit,
              title: post.data.title,
              downs: post.data.downs,
              ups: post.data.ups,
              thumbnail: post.data.thumbnail,
              description: post.data.selftext,
              url: post.data.permalink,
            };
          });
          setPosts(newPosts);
        }
      )();
    },
    []
  );

  return (
    <Container>
      <PostGrid posts={posts} />
    </Container>
  );
};
