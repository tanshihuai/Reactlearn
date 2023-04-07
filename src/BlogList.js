import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    
    return (
        <div className="Home">
            <h1>{title}</h1>
            <hr/>
            <br/>
            {blogs.map((i) => (
                <div className="blog-preview" key={i.id}>
                    <Link to={`/blogs/${i.id}`}>
                        <h2>{i.title}</h2>
                    </Link>
                    <p>{i.author}</p>
                    <br/>
                </div>
            ))}
            
        </div>
    );
}

export default BlogList;