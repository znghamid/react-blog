import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [title, setTitle] = useState('All Blogs');
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
        })
    }, 2000);
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;