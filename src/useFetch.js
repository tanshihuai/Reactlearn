import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setisLoading] = useState(true)
    const [hasError, setHasError] = useState(null)
    
    useEffect(() => {

        const abortCont = new AbortController();


        setTimeout( () => {
            fetch(url, { signal: abortCont.signal } )
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
                if (err.name === "AbortError"){
                    console.log("fetch aborted")
                }
                else{
                    setHasError(err.message)
                    setisLoading(false)
                }
            })
        }, 1000)

        return () => abortCont.abort()
    }, [url])

    return {data, isLoading, hasError}
}

export default useFetch
