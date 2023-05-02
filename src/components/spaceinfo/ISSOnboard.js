import useFetch from "../../hooks/useFetch";
import SkeletonElement from "../skeletons/SkeletonElement";

const ISSOnboard = () => {

    const { data, error, isPending} = useFetch("/api/space/astronauts/");

    return ( 
            <div className="onboard">Onboard:
                { isPending && (
                    <div>
                        <SkeletonElement type="text" />
                        <SkeletonElement type="text" />
                        <SkeletonElement type="text" />
                    </div>
                )}
                { error && <div>Error: { error }</div>}    
                <ul>
                {data && data.people.map((astro, i) => (
                astro.craft === "ISS" && 
                    <li key={i}>{astro.name}</li>                        
                ))}
                </ul>
            </div>
     );
}
 
export default ISSOnboard;