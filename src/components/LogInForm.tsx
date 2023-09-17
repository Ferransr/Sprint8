import { Link } from 'react-router-dom';
import googleLogo from '../assets/img/google-logo.png'
import { auth } from '../config/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export function LogInForm(props: { signInWithGoogle: () => void; authing: boolean | undefined; }) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const LogIn = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await signInWithEmailAndPassword(auth, email, password); // Cast auth to Auth
      // Handle success or navigate to a different page
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className='logInFormDiv'>
      <form onSubmit={LogIn} className="logInInputsDiv">
        <div className='usernameInputDiv'>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Username' />
        </div>
        <div className='passwordInputDiv'>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
        </div>
        <button type='submit'>Sign in</button>
      </form>

      <div className='logInDivider'>

      </div>
      <button onClick={() => props.signInWithGoogle()} disabled={props.authing}>
        <img src={googleLogo} className='googleLogo' alt="Google logo" />
      </button>
      <div className='registerNowDiv'></div>
      <Link to={'/signup'}>Don't have an account? Register now.</Link>
    </div>
  );
}
