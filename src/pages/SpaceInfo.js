import ISSInfo from "../components/spaceinfo/ISSInfo";
import NASAapod from "../components/spaceinfo/NASAapod";
import NeoInfo from "../components/spaceinfo/NeoInfo";
import SpaceNews from "../components/spaceinfo/SpaceNews";

const SpaceInfo = () => {
    return ( 
        <div className="spaceinfo">
             <div className="space-news">
                <NASAapod />
                <SpaceNews />
             </div>
             <div className="space-data">
                <ISSInfo />
                <NeoInfo />
             </div>
        </div>
     );
}
 
export default SpaceInfo;