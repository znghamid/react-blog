import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'create website', blog: 'lorem ipsum...', author: 'hamidreza', id: 1},
    { title: 'how to code like a boss', blog: 'lorem ipsum...', author: 'arash', id: 2},
    { title: 'tips and trick', blog: 'lorem ipsum...', author: 'ali', id: 3},
    { title: 'best web dev tool', blog: 'lorem ipsum...', author: 'mohammad', id: 4}
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;