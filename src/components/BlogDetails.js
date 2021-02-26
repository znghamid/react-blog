import { useParams } from "react-router-dom";
import useFetch from "../webHooks/useFetch";

const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, isPending, errorFetch} = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {errorFetch && <div>{errorFetch}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
