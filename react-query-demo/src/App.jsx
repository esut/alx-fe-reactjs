import React from 'react';
import PostsComponent from './PostsComponent';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
