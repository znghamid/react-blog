import { useEffect, useState } from 'react';
import useFetch from '../webHooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const [title, setTitle] = useState('All Blogs');
  const {data: blogs, isPending, errorFetch} = useFetch('http://localhost:8000/blogs');
  useEffect(() => {
    if (blogs) {
      if (blogs.length === 0) {
        setTitle('No Blog to show');
      }
    }
  }, [blogs]);

  return (
    <div className="home">
      {errorFetch && <div>{errorFetch}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;