import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'create website', blog: 'lorem ipsum...', author: 'hamidreza', id: 1 },
    { title: 'how to code like a boss', blog: 'lorem ipsum...', author: 'arash', id: 2 },
    { title: 'tips and trick', blog: 'lorem ipsum...', author: 'ali', id: 3 },
    { title: 'best web dev tool', blog: 'lorem ipsum...', author: 'mohamad', id: 4 }
  ]);
  const handleDelete = (id) => {
    let newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  }
  useEffect(() => {
    console.log(`blogs lenght is ${blogs.length}`);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;