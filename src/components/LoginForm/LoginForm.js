import {
    signInWithEmailAndPassword
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/Firebase";

export function LoginForm() {
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("password");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {  //can make it faster by using async await
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("user", JSON.stringify(user));
                console.log("Signed in as user:", user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
                setError(`Error signing in: ${errorCode} - ${errorMessage}`);
            });
    };

    const redirectToRegister = (e) => {
        e.preventDefault();

        navigate("/register");
    }

    return (
        <div>
            <form>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" onClick={handleLogin}>Login</button>
                <button type="register" onClick={redirectToRegister}>Sign Up / Register</button>
            </form>
            {error && <code>{error}</code>}
        </div>
    );
}
