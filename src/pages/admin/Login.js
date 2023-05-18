import { useState } from "react";

const Login = () => {

    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(userID, password);
    }

    return ( 
        <div className="card my-card">
            <form className="admin-form" onSubmit={handleSubmit}>
                <div className="card-header my-card-header">
               Login
                </div>
                <div className="card-body my-card-body">
                    <label>User ID:</label>
                    <input 
                        type="text"
                        required
                        onChange = {(e) => setUserID(e.target.value)}
                        value = {userID}
                    />

                    <label>Password:</label>
                    <input 
                        type="password"
                        required
                        onChange = {(e) => setPassword(e.target.value)}
                        value = {password}
                    />

                    <button className="btn btn-success">Login</button>

                    {error && <div className="error">{error}</div>}
                    </div>
            </form>
        </div>
     );
}
 
export default Login;