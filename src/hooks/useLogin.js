import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);

    const {dispatch } = useAuthContext();

    const login = async (userID, password) => {
        setIsPending(true);
        setError(null);

        const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({userID, password})
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

    return {login, isPending, error};
}