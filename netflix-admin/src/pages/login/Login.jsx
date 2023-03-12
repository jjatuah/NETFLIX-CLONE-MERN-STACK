import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import "./Login.css";
import NFLogo from "./NetflixLogo.png"


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({email, password}, dispatch)
  }

  return ( 
    <div className="login">
      <div className="top">
        <div className="topWrapper">
          <img
            className="logo"
            src={NFLogo}
            alt="Netflix Logo"
          />
        </div>
      </div>
      <div className="loginContainer">
        <form>
          <h1>Admin Sign In</h1>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Sign In</button>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form> 
      </div>
    </div>
   );
}
 
export default Login;