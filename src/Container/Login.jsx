import React from "react";
import LoginCard from "../Components/LoginCard";
import "./Login.css";
import googleIcon from "../Assets/google.svg";
import appleIcon from "../Assets/apple.svg";

function login() {
  return (
    <div className="flex flex-row grid grid-cols-5">
      {/* Dividing login page into 2 sections */}
      <div className="nameDiv col-span-2">
        <p>Board.</p>
      </div>
      <div className="contentDiv col-span-3">
        <div className="w-96 p-1">
          <p className="heading">Sign In</p>
          <p className="sub-heading">Sign in to your account</p>
          {/* Buttons for google and apple signin */}
          <button className="socialSignins">
            {" "}
            <div className="grid grid-cols-12">
              <img
                src={googleIcon}
                alt="Google Icon"
                className="icons col-span-1"
              />
              <span className="col-span-11 mt-1">Sign in with Google</span>
            </div>
          </button>
          <button className="socialSignins ml-3 my-4">
            <div className="grid grid-cols-12">
              <img
                src={appleIcon}
                alt="Apple Icon"
                className="icons col-span-1"
              />
              <span className="col-span-11 mt-1">Sign in with Apple</span>
            </div>
          </button>
          {/* LoginCard Component */}
          <LoginCard />
          <p className="register">
            {/* Link button to register page */}
            Don't have an account?{" "}
            <a href="" className="registerLink">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
