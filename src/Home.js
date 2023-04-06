import { useState, useEffect } from "react"
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

    const { data, isLoading, hasError } = useFetch('http://localhost:8000/blogs')

    return (
        <div className = "home">
            {hasError && <div>{hasError}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList blogs = {data} title="All books"/>}
        </div>
    )


}

export default Home;