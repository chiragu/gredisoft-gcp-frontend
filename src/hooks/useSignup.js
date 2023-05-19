import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    const {dispatch } = useAuthContext();

    const signup = async (userID, password, signupCode) => {
        setIsPending(true);
        setError(null);

        const response = await fetch("/api/admin/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({userID, password, signupCode})
        });

        const json = await response.json();

        if (!response.ok) {
            setIsPending(false);
            setError(json.error);
        }

        if (response.ok) {
            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update Auth Context
            dispatch({type: "LOGIN", payload: json});

            setIsPending(false);

        }
    }

    return {signup, isPending, error};
}