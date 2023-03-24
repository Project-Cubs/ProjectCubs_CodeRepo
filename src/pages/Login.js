import { auth } from "../services/Firebase";
import {
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Login() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  
  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       console.log("Saved User", user);
  //       setLoggedIn(true); // 로그인 상태 설정  
  //       navigate('/'); // 로그인 후 메인 페이지로 이동
  //     }
  //   });
  // }, [navigate, setLoggedIn])

  
  
  const handleLogin = (e) => {  //can make it faster by using async await
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setLoggedIn(true);
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

  
  
  async function handleSignUp(event) {
    event.preventDefault();
    console.log("handleSingUp")
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user_email = response.user.email;
      console.log(response);
      console.log("signed up with email: " + user_email);
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  }



  return (
    <div>
      <h1>Login Page</h1>
      {/* <form onSubmit={handleSubmit}> */}
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
        <br />
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
      </form>
      <p>{error}</p>

    </div>
  );
}
