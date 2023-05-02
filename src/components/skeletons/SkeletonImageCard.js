import SkeletonElement from "../skeletons/SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonImageCard = ({title}) => {
    return ( 
        <div className="card my-card skeleton-wrapper">
             
                <div className="card-header my-card-header">
                    {title}
                </div>
                <div className="card-body my-card-body">
                    <SkeletonElement type="image"/>
                    <SkeletonElement type="text"/>
                    <SkeletonElement type="text"/>
                    <SkeletonElement type="text"/>
                </div>
                <Shimmer />          
        </div>

     );
}
 
export default SkeletonImageCard;