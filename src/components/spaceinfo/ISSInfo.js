import ISSMap from "./ISSMap";
import ISSOnboard from "./ISSOnboard";

const ISSInfo = () => {
    return (
            <div className="card my-card iss-info">
                <div className="card-header my-card-header">International Space Station Live</div>
                <div className="card-body my-card-body">

                    <ISSMap />
                    <ISSOnboard />
                    
                </div>           
            </div>
         );
}
 
export default ISSInfo;