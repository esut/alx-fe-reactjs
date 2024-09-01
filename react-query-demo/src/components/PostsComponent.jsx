import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, 
    staleTime: 1000 * 30,    
    refetchOnWindowFocus: true, 
    keepPreviousData: true,  
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>Refetch Data</button>
      {isFetching && <span> Updating...</span>}
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
