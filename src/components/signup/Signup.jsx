import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import cross from "../../assets/cross.svg"
import fb from "../../assets/fb.svg"
import google from "../../assets/google.svg"
import tbm from "../../assets/tabler_mail.svg"
import lock from "../../assets/lock.svg"
import user from "../../assets/user.svg"
export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="frame-wrapper">
        <div className="frame">
          <h1 className="text-wrapper">Create Account</h1>
          <p className="p">or use your email for registration</p>
          <div className="div">
            <img
              className="vector"
              alt="Vector"
              src={user}
            />
            <div className="div-wrapper">
              <div className="text-wrapper-2">Name</div>
            </div>
          </div>
          <div className="frame-2">
            <img
              className="tabler-mail"
              alt="Tabler mail"
              src={tbm}
            />
            <div className="text-wrapper-3">Email</div>
          </div>
          <div className="frame-3">
            <img
              className="img"
              alt="Vector"
              src={lock}
            />
            <div className="text-wrapper-3">Password</div>
          </div>
          <div className="button-join-now-icon">
            <div className="text-wrapper-4">Sign Up</div>
          </div>
          
          <img
            className="frame-4"
            alt="Frame"
            src={google}
          />
          <div className="overlap-group">
            <div className="frame-5">
              <div className="text-wrapper-5">Welcome !!</div>
              <p className="text-wrapper-6">To keep connected with us please sign In with your personal info</p>
              <div className="button-join-now-icon-2">
                <div className="text-wrapper-4"><Link to="/signin">Sign In</Link></div>
              </div>
              <div className="text-wrapper-7">forgot password?</div>
            </div>
            <div className="frame-6">
              <img
                className="vector-2"
                alt="Vector"
                src={logo}
              />
            </div>
          </div>
          <img
            className="vector-3"
            alt="Vector"
            src={cross}
          />
        </div>
      </div>
    </div>
  );
};
