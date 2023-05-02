import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <div className="card my-card">
                <div className="card-header my-card-header">Sorry</div>

                <div className="card-body my-card-body">
                    <p>That Page cannot be found</p>
                    <Link to="/">&lt; Back to homepage</Link>
                </div>
            </div>           
        </div>
     );
}
 
export default NotFound;