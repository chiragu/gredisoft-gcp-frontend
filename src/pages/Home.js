import useFetch from "../hooks/useFetch";
import Trivia from "../components/Trivia";

const Home = () => {

    const { data } = useFetch("/api/joke");

    return ( 
        <div className="home">
            <div className="card my-card">
                <div className="card-header my-card-header"><h2>Welcome to Gredisoft!</h2></div>
                <div className="card-body my-card-body">
                    <h4>Select an App from the navigation to get started.</h4>
                    <h4>Note: This is a demo website with no persistent data. All data will be lost on refresh!<br/>Arg Map may be saved locally.</h4>
                    <div className="logo"></div>
                    {data && <h4>{data.joke}</h4> }
                </div>
            </div> 

            <Trivia />          
        </div>
     );
}
 
export default Home;