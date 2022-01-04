export type Post = {
  author: string;
  subreddit: string;
  title: string;
  ups: number;
  thumbnail: string;
  description: string;
  url: string;
};

export const loadPostsAPI = async (term: string): Promise<Post[]> => {
  const urlParam = encodeURIComponent(term);
  let url = 'https://www.reddit.com/r/popular.json';
  if (term) {
    url = `https://www.reddit.com/search.json?q=${urlParam}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  return json.data.children.map((post: any) => (
    {
      author: post.data.author,
      subreddit: post.data.subreddit,
      title: post.data.title,
      ups: post.data.ups,
      thumbnail: post.data.thumbnail,
      description: post.data.selftext,
      url: post.data.permalink,
    }
  ));
};
