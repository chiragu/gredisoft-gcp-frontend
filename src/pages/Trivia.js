import { Link } from "react-router-dom";

const Trivia = () => {
    return ( 
        <div className="trivia">
            <div className="card my-card">
                <div className="card-header my-card-header">Trivia</div>
                <div className="card-body my-card-body">
                    <p>This app is under construction. Please check back later for updates.</p>
                    <Link to="/">&lt; Back to homepage</Link>
                </div>
            </div>           
        </div>
     );
}
 
export default Trivia;