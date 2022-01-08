import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';

// Import features
import { PostCard } from './PostCard';

import { useAppDispatch } from '../../app/hooks';
import { thunkLoadPosts } from './postsSlice';

const Container = styled.div`
  padding: 24px;
  box-sizing: border-box;
  width: 75%;
  overflow-y: auto;
  border-radius: 4px;
  background-color: white;
  scrollbar-color: rgba(28, 13, 74, 0.3) white;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(28, 13, 74, 0.3);

    &:hover {
      background: rgba(28, 13, 74, 0.6);
    }
  }

  @media screen and (max-width: 600px) {
    width: fit-content;
    height: fit-content;
    padding: 12px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: dense;

  @media screen and (max-width: 600px) {
    grid-gap: 12px;
  }
`;

const CenteredText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 24px;
  color: #1c0d4a;
`;

export const PostGrid = () => {
  const posts = useAppSelector(state => state.posts.posts);
  const isLoading = useAppSelector(state => state.posts.isLoading);
  const currentSearch = useAppSelector(state => state.search.currentSearch);
  const dispatch = useAppDispatch();
  useEffect(
    () => {
      dispatch(thunkLoadPosts(currentSearch));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSearch]
  );
  return (
    <Container>
      {
        isLoading ?
          <CenteredText>Loading...</CenteredText> :
          (
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
                      url={post.url}
                    />
                  ))
                }
              </Grid> :
              <CenteredText>No results found...</CenteredText>
            )
      }
    </Container>
  );
};
