import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {

    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [signUpCode, setSignUpCode] = useState("");

    const {signup, error, isPending} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(userID, password, signUpCode);
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

                    <button disabled={isPending} className="btn btn-success">Sign Up</button>

                    {error && <div className="error">Error: {error}</div>}
                    </div>
            </form>
        </div>
     );
}
 
export default Signup;