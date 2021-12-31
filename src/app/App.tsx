import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/post-grid/PostGrid';
import { CurrentSearch } from '../features/current-search/CurrentSearch';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 24px 12px;
  box-sizing: border-box;
`;

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentTerm, setCurrentTerm] = useState('popular');
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
  const handleSearch = async (param: string) => {
    const urlParam = encodeURIComponent(param);
    let url = 'https://www.reddit.com/r/popular.json';
    let term = 'popular';
    if (param) {
      url = `https://www.reddit.com/search.json?q=${urlParam}`;
      term = param;
    }
    const response = await fetch(url);
    const json = await response.json();
    setCurrentTerm(term);
    setPosts(newPostsFactory(json));
  };
  useEffect(
    () => {
      (
        async () => {
          const response = await fetch('https://www.reddit.com/r/popular.json');
          const json = await response.json();
          console.log(json.data.children);
          setPosts(newPostsFactory(json));
        }
      )();
    },
    []
  );
  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container>
        <Sidebar>
          <CurrentSearch currentTerm={currentTerm} />
        </Sidebar>
        <PostGrid posts={posts} />
      </Container>
    </>
  );
};
