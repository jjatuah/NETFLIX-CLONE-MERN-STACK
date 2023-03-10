import "./Login.scss";
import NetflixLogo from "../../assets/NetflixLogo.png"


const Login = () => {
  return ( 
    <div className="login">
      <div className="top">
        <div className="topWrapper">
          <img
            className="logo"
            src={NetflixLogo}
            alt="Netflix Logo"
          />
        </div>
      </div>
      <div className="loginContainer">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
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