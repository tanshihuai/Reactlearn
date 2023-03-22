const BlogList = ({ blogs, title, deleteitem }) => {
    
    return (
        <div className="Home">
            <h1>{title}</h1>
            <hr/>
            <br/>
            {blogs.map((i) => (
                <div key={i.id}>
                    <h2>{i.book}</h2>
                    <p>{i.name}</p>
                    <button onClick={() => deleteitem(i.id)}>Delete book</button>
                    <br/>
                </div>
            ))}
            
        </div>
    );
}

export default BlogList;