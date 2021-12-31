import { useState, useEffect } from 'react';

// Import features
import { Header } from '../features/header/Header';
import { PostGrid } from '../features/post-grid/PostGrid';

export const App = () => {
  const [posts, setPosts] = useState([]);
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
    const response = await fetch(`https://www.reddit.com/search.json?q=${urlParam}`);
    const json = await response.json();
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
      <PostGrid posts={posts} />
    </>
  );
};
