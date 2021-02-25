import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [title, setTitle] = useState('All Blogs');
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;