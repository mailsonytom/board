import React from "react";
import "./ComponentsStyle.css";

function LoginCard() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      {/* Label and input fields for email and password */}
      <div>
        <label htmlFor="email" className="text-base leading-5	">
          Email address
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          className="loginInputs"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="pass" className="text-base leading-5">
          Password
        </label>
        <input
          type="password"
          name="pass"
          placeholder="Enter password"
          className="loginInputs"
        />
      </div>
      <p className="linkButton">
        <a href="">Forgot password?</a>
      </p>
      <button className="signinButton">Sign In</button>
    </div>
  );
}

export default LoginCard;
