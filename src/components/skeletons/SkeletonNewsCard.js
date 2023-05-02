import SkeletonElement from "../skeletons/SkeletonElement";
import Shimmer from "./Shimmer";

const SkeletonNewsCard = ({title}) => {
    return ( 
        <div className="card my-card skeleton-wrapper">
             
                <div className="card-header my-card-header">
                    {title}
                </div>
                <div className="card-body my-card-body">
                    <div className="spacenews-skeleton-columns">
                        <div className="left">
                            <SkeletonElement type="thumbnail"/>
                        </div>
                        <div className="right">                
                            <SkeletonElement type="text"/>
                            <SkeletonElement type="text"/>
                            <SkeletonElement type="text"/>
                        </div>
                </div>
            </div>
                <Shimmer />          
        </div>

     );
}
 
export default SkeletonNewsCard;