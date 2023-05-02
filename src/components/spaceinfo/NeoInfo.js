import useFetch from "../../hooks/useFetch";
import SkeletonListCard from "../skeletons/SkeletonListCard";

const NeoInfo = () => {

    const { data, error, isPending } = useFetch("/api/space/neo/");

    return ( 
        <div>
            {(data || error) &&
                <div className="card my-card neoinfo">
                    <div className="card-header my-card-header">Near Earth Objects Today</div>
                    <div className="card-body my-card-body">  
                        { isPending && <div>Loading...</div>}
                        { error && <div>Error: {error}</div>}                   
                        <ul>
                            {data && data.near_earth_objects[Object.keys(data.near_earth_objects)[0]].map((neo, i) => (   

                                <li className={neo.is_potentially_hazardous_asteroid.toString()} key={i}><a href={neo.nasa_jpl_url}>{neo.name}</a></li>                            
                            ))}
                        </ul>
                    </div>           
                </div>
            }
            
            {isPending && <SkeletonListCard title="Near Earth Objects Today" /> }
        </div>
     );
}
 
export default NeoInfo;