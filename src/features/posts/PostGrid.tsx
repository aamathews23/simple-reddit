import { useEffect } from 'react';
import styled from 'styled-components';

// Import features
import { PostCard } from './PostCard';
import { Loader } from './Loader';
import { NoResults } from './NoResults';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { thunkLoadPosts } from './postsSlice';

const Container = styled.div`
  padding: 24px;
  box-sizing: border-box;
  width: 75%;
  overflow-y: auto;
  border-radius: 4px;
  background-color: ${props => props.theme.surface};
  scrollbar-color: ${props => props.theme.primary} ${props => props.theme.surface};
  scrollbar-width: thin;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary};

    &:hover {
      background: ${props => props.theme.primaryDark};
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 100vh;
    padding: 12px;
    background: none;
    box-shadow: none;
  }

  @media screen and (min-width: 601px) and (max-width: 768px) {
    width: 60%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-flow: dense;

  @media screen and (max-width: 600px) {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
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
          <Loader /> :
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
              <NoResults text="No results found" />
            )
      }
    </Container>
  );
};
