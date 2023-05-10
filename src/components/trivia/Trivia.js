import { useState, useEffect } from "react";
import SkeletonListCard from "../skeletons/SkeletonListCard";
import TriviaOption from "./TriviaOption";

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
    },[refreshData]);

    const shuffle = (array) => {

        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }


    return ( 
        <div className="trivia">
            {data && !isPending && (
            <div className="card my-card">
                <div className="card-header my-card-header">Trivia</div>
                <div className="card-body my-card-body">
                {error && <div>{error}</div>}
                {!error &&(
                    <div className="trivia-options">
                        <p dangerouslySetInnerHTML={{__html: `${data.question}`}}></p>
                        {shuffle([...data.incorrect_answers, data.correct_answer]).map((option, index) => (
		                    <TriviaOption option={option} correct_answer={data.correct_answer} key={index}/>
	                    ))}
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