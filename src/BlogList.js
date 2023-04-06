const BlogList = ({ blogs, title }) => {
    
    return (
        <div className="Home">
            <h1>{title}</h1>
            <hr/>
            <br/>
            {blogs.map((i) => (
                <div key={i.id}>
                    <h2>{i.title}</h2>
                    <p>{i.author}</p>
                    <br/>
                </div>
            ))}
            
        </div>
    );
}

export default BlogList;