import useFetch from '../webHooks/useFetch';
import BlogList from './BlogList';

const Home = () => {
  const {data: blogs, isPending, errorFetch} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {errorFetch && <div>{errorFetch}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;