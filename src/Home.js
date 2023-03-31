import { useState, useEffect } from "react"
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        {name: "Newt Scamander", age: 54, id: 1, book: "Fantastic Beasts and where to find them", restricted: false},
        {name: "Rita Skeeter", age: 40, id: 2, book: "The life and lies of Dumbledore", restricted: false},
        {name: "Bathilda Bagshot", age: 80, id: 3, book: "Hogwarts: A History", restricted: false},
        {name: "Godelot", age: 121, id: 4, book: "Magicke Moste Evile", restricted: true}
    ])

    const deleteitem = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("hello world")
    }, [])

    return (
        <div className = "home">
            <BlogList blogs = {blogs} title="All books" deleteitem = {deleteitem}/>
            <BlogList blogs = {blogs.filter((blog) => blog.restricted === true)} title="Restricted Section"/>
        </div>
    )
}

export default Home;