import  { useState, useEffect } from "react";

// Custom hooks have to start with word "use"
const useFetch = (url) => {

    // useState hook - rerenders component with set function
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook fires after every render when any state changes or load/refresh
    // second argument is a dependency array to filter when to rerender - i.e. only when values in array change
    // if dependency array is empty - only runs at first render
    useEffect(() => {

        // Timeout for testing 
        //setTimeout(async () => {

        // Abort controller, in case page changed during fetch
        const abortCont = new AbortController();


        fetch(url, {signal: abortCont.signal })
            .then(res =>  {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("Fetch Aborted")
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        

        return () => abortCont.abort();

        // Timeout for testing 
        // }, 5000);

    }, [url]);

    return { data, isPending, error }

    
}

export default useFetch;