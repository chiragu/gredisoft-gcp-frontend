import useFetch from "../../hooks/useFetch";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from "leaflet";
import SkeletonElement from "../skeletons/SkeletonElement";

const ISSMap = () => {

    const { data, error, isPending } = useFetch("/api/space/iss/");

    const ISSIcon = new Icon({
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg",
        iconSize: [50, 50]
      });

    return (
        <div>
            {isPending && <SkeletonElement type="image" />}                   
            { error && <div>Map: <br/> Error: { error }</div>}            
            {data &&
                <MapContainer center={[data.iss_position.latitude, data.iss_position.longitude]} zoom={1}scrollWheelZoom={true} zoomControl={false}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker
                        position={[
                            data.iss_position.latitude,
                            data.iss_position.longitude
                        ]}
                        icon={ISSIcon}
                    />
                </MapContainer>
            }
        </div>      
     );
}
 
export default ISSMap;