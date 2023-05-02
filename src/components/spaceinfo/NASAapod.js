import useFetch from "../../hooks/useFetch";
import SkeletonImageCard from "../skeletons/SkeletonImageCard";

const NASAapod = () => {

    const { data, error, isPending } = useFetch("/api/space/apod/");

    return ( 
        <div>
            {(data || error) && 
            <div className="card my-card apod">             
                    <div className="card-header my-card-header">NASA Astronomy Picture of the Day</div>
                    <div className="card-body my-card-body">
                        <a href={data && data.url} target="_blank" rel="noreferrer"><img src={data && data.url} alt="NASA Astronomy"/></a>            
                        <p> {data && data.explanation}</p>
                        { error && <div>Error: { error }</div>}
                    </div>          
            </div>
            }

            {isPending && <SkeletonImageCard title="NASA Astronomy Picture of the Day" /> }
        </div>
     );
}
 
export default NASAapod;