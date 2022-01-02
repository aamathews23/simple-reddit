import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/post-grid/PostGrid';
import { CurrentSearch } from '../features/current-search/CurrentSearch';
import { SearchHistory } from '../features/search-history/SearchHistory';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 94vh;

  @media screen and (max-width: 600px) {
    height: fit-content;
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 12px 0px 0px 12px;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    display: none;
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
`;

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentTerm, setCurrentTerm] = useState('popular');
  const [history, setHistory] = useState<string[]>(['popular']);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    if (param) {
      url = `https://www.reddit.com/search.json?q=${urlParam}`;
      term = param;
    }
    setHistory([term, ...history]);
    setCurrentTerm(term);
    const response = await fetch(url);
    const json = await response.json();
    setPosts(newPostsFactory(json));
    setIsLoading(false);
  };
  useEffect(
    () => {
      setIsLoading(true);
      (
        async () => {
          const response = await fetch('https://www.reddit.com/r/popular.json');
          const json = await response.json();
          setPosts(newPostsFactory(json));
          setIsLoading(false);
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
          <SearchHistory history={history} handleSearch={handleSearch} />
        </Sidebar>
        {
          !isLoading ?
            <PostGrid posts={posts} /> :
            <CenteredText>Loading...</CenteredText>
        }
      </Container>
    </>
  );
};
