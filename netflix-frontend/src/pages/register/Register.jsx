import "./Register.scss";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }


  return ( 
    <div className="register">
      <div className="top">
        <div className="topWrapper">
          <img src={NetflixLogo} alt="Netflix Logo" className="logo" />
          <Link className="loginButton" to={"/signin"}><button className="loginButton"> Sign in</button></Link>
        </div>
      </div>

      <div className="regContainer">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {
          !email ? (
            <div className="inputMail">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="regButton" onClick={handleStart}>Get Started</button>
            </div>
          ) : (
            <form className="inputPassword">
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="regButton" onClick={handleFinish}> Start</button>
            </form>
          )
        }
      </div>
    </div>
   );
}
 
export default Register;