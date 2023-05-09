import { useState, useEffect } from "react";
import SkeletonListCard from "./skeletons/SkeletonListCard";

const Trivia = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [refreshData, setRefreshData] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // Abort controller, in case page changed during fetch
        const abortCont = new AbortController();
        fetch('https://opentdb.com/api.php?amount=1', {signal: abortCont.signal })
        .then(res =>  {
            if (!res.ok) {
                throw Error("Could not fetch the data for that resource");
            }
            return res.json();
        })
        .then(data => {
            setData(data.results[0]);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log("Fetch Aborted");
            }
            else {
                setIsPending(false);
                setError(err.message);
            }
    });
    },[refreshData])

    return ( 
        <div className="trivia">
            {data && !isPending && (
            <div className="card my-card">
                <div className="card-header my-card-header">Trivia</div>
                <div className="card-body my-card-body">
                {error && <div>{error}</div>}
                {!error &&(
                    <div>
                        <p dangerouslySetInnerHTML={{__html: `${data.question}`}}></p>
                        <p dangerouslySetInnerHTML={{__html: `${data.correct_answer}`}}/>
                        <p dangerouslySetInnerHTML={{__html: `${data.incorrect_answers}`}}/>
                    </div>
                )}                    
                <button style={{float: 'right'}} className="btn btn-primary" onClick={() => {setRefreshData(!refreshData); setIsPending(true);}}>Next &gt;</button>
                </div>
            </div> 
            )}  

            {isPending && <SkeletonListCard title="Trivia" /> }        
        </div>
     );
}
 
export default Trivia;