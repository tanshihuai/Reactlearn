import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams()
    const { data: blog, isLoading, hasError } = useFetch(`http://localhost:8000/blogs/${id}`)

    return ( 
        <div className="blog-details">
            { isLoading && <div>Loading...</div> }
            { hasError && <div>{ hasError }</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}

export default BlogDetails;