import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/Firebase";

export function RegisterForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(event) {
    event.preventDefault();
    console.log("handleSignUp");
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        firstName,
        lastName,
        email,
        password
      );
      const name = response.user.firstName + " " + response.user.lastName;
      const user_email = response.user.email;
      console.log(response);
      console.log(name + " signed up with email: " + user_email);
      navigate("/login");
    } catch (error) {
      setError(error.message);
      console.log(error)
    }
  }

  function backToLogin(event) {
    event.preventDefault();
    navigate("/login");
  }

  return (
    <div>
      <form>
        <label>
          First Name:
          <input
            type="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
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
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
        <button type="button" onClick={backToLogin}>Back to Login</button>
      </form>
      {error && <code>{error}</code>}
    </div>
  );
}
