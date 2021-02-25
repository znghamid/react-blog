import { useState, useEffect } from 'react';
import useFetch from '../webHook/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const [title, setTitle] = useState('All Blogs');
  const {data: blogs, isLoading, errorFetch} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {errorFetch && <div>{errorFetch}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;