import { auth } from "../services/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export function Logout({ setLoggedIn }) {
    const navigate = useNavigate();
    useEffect(() => {
        auth.signOut();
        setLoggedIn(false);
        navigate("/");
    }, [setLoggedIn, navigate]);

    return (
        <div>
        
        </div>
    );
}
