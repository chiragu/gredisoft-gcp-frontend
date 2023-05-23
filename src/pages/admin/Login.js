import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";
import AdminTasks from "../../components/admin/AdminTasks";

const Login = () => {

    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const { logout } = useLogout();
    const { login, error, isPending } = useLogin();
    const { user } = useAuthContext();

    const handleSubmit = async (e) => {

        e.preventDefault();
        await login(userID, password);
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="admin">
            
            {user && <button className="btn btn-light logout-button" onClick={handleLogout}>Log out</button> }
            
            {!user &&
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

                            <button disabled={isPending} className="btn btn-success">Login</button>

                            {error && <div className="error">{error}</div>}
                            </div>
                    </form>
                </div>
            }

            {user && <AdminTasks /> }
        </div>
     );
}
 
export default Login;