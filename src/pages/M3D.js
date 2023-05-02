import { Link } from "react-router-dom";

const M3D = () => {
    return ( 
            <div className="card my-card">
                <div className="card-header my-card-header">Moon 3D</div>
                <div className="card-body my-card-body">
                    <p>Coming soon...<br/><br/>This app is under construction. Please check back later for updates.</p>
                    <Link to="/">&lt; Back to homepage</Link>
                </div>
            </div>           

     );
}
 
export default M3D;