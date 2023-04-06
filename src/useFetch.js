import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [hasError, setHasError] = useState(null)
    
    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res)
                if (!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(res => {
                setData(res)
                setisLoading(false)
                setHasError(null)
            })
            .catch(err => {
                setHasError(err.message)
                setisLoading(false)
            })
    }, [url])

    return {data, isLoading, hasError}
}

export default useFetch
