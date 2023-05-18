import { useState } from "react";

const Signup = () => {

    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [signUpCode, setSignUpCode] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log(userID, password, signUpCode);
    }

    return ( 
        <div className="card my-card">
            <form className="admin-form" onSubmit={handleSubmit}>
                <div className="card-header my-card-header">
               Sign Up
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

                    <label>Sign Up Code:</label>
                    <input 
                        type="text"
                        required
                        onChange = {(e) => setSignUpCode(e.target.value)}
                        value = {signUpCode}
                    />

                    <button className="btn btn-success">Sign Up</button>

                    {error && <div className="error">{error}</div>}
                    </div>
            </form>
        </div>
     );
}
 
export default Signup;