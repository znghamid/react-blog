import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [title, setTitle] = useState('All Blogs');
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
          setErrorFetch(null);
        })
        .catch(err => {
          setErrorFetch(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {errorFetch && <div>{errorFetch}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;