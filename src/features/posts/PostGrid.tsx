import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';

// Import features
import { PostCard } from './PostCard';

import { useAppDispatch } from '../../app/hooks';
import { loadPosts, setIsLoading } from './postsSlice';

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

export const PostGrid = () => {
  const posts = useAppSelector(state => state.posts.posts);
  const isLoading = useAppSelector(state => state.posts.isLoading);
  const currentSearch = useAppSelector(state => state.search.currentSearch);
  const dispatch = useAppDispatch();
  const newPostsFactory = (json: any) => {
    return json.data.children.map((post: any) => {
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
  };
  useEffect(
    () => {
      dispatch(setIsLoading(true));
      (
        async () => {
          const urlParam = encodeURIComponent(currentSearch);
          let url = 'https://www.reddit.com/r/popular.json';
          if (currentSearch) {
            url = `https://www.reddit.com/search.json?q=${urlParam}`;
          }
          const response = await fetch(url);
          const json = await response.json();
          dispatch(loadPosts(newPostsFactory(json)));
          dispatch(setIsLoading(false));
        }
      )();
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
                      downs={post.downs}
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