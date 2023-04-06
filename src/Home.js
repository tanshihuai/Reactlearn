import { useState, useEffect } from "react"
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {return res.json()})
            .then(res => setBlogs(res))
            .then(console.log(blogs))
    }, [])

    return (
        <div className = "home">
            {blogs && <BlogList blogs = {blogs} title="All books"/>}
        </div>
    )
}

export default Home;