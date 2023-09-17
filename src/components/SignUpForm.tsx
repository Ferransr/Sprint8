import React, { useState } from "react";
import { auth } from "../config/config";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registrationSuccess, setRegistrationSuccess] = useState<boolean | null>(null);

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro exitoso, establece el estado de registro en verdadero
      setRegistrationSuccess(true);
    } catch (error) {
      console.error("Error signing up:", error);
      // Registro fallido, establece el estado de registro en falso
      setRegistrationSuccess(false);
    }
  };

  return (
    <div>
      {registrationSuccess === true ? (
        <div className="success-message">Successful registration! Enjoy the starships.</div>
      ) : registrationSuccess === false ? (
        <div className="error-message">Registration error. Please try again.</div>
      ) : null}

      <form onSubmit={signup} className='logInFormDiv'>
        <div className="logInInputsDiv">
          <div className='usernameInputDiv'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Username'
              value={email}
            />
          </div>
          <div className='passwordInputDiv'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Password'
              value={password}
            />
          </div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
