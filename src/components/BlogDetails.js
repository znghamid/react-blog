import { useHistory, useParams } from "react-router-dom";
import useFetch from "../webHooks/useFetch";

const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, isPending, errorFetch} = useFetch(`https://my-json-server.typicode.com/znghamid/jsonDB/blogs/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch("https://my-json-server.typicode.com/znghamid/jsonDB/blogs/" + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {errorFetch && <div>{errorFetch}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
