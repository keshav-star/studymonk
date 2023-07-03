import React ,{useState} from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import cross from "../../assets/cross.svg"
import google from "../../assets/google.svg"
import tbm from "../../assets/tabler_mail.svg"
import lock from "../../assets/lock.svg"
import "./styles.css";

export const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div className="box">
      <div className="frame-wrapper">
        <div className="frame">
          <h1 className="text-wrapper">Welcome !!</h1>
          <p className="p">or use your email for signIn</p>
          <div className="div">
            <img className="tabler-mail" alt="Tabler mail" src={tbm}/>
            <div className="text-wrapper-2">Email</div>
          </div>
          <div className="frame-2">
            <img className="vector" alt="Vector" src={lock} />
            <div className="text-wrapper-2">Password</div>
          </div>
          <div className="button-join-now-icon">
            <div className="text-wrapper-3">Sign In</div>
          </div>
          <div className="text-wrapper-4">forgot password?</div>
          <img className="img" alt="Frame" src={google} />
          <div className="frame-3">
            <div className="text-wrapper-5">Create Account</div>
            <p className="text-wrapper-6">First Time? connect with us by sign Up with your personal info</p>
            <div className="div-wrapper">
              <div className="text-wrapper-3"><Link to="/signup">Sign Up</Link></div>
            </div>
            <img className="vector-2" alt="Vector" src={cross} />
          </div>
          <div className="frame-4">
            <img className="vector-3" alt="Vector" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
};
