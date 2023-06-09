import React from "react";
import LoginCard from "../../Components/LoginCard/LoginCard";
import "./Login.css";
import googleIcon from "../../Assets/googleIcon.png";
import appleIcon from "../../Assets/appleIcon.png";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [ user, setUser ] = useState([]);
  // const [ profile, setProfile ] = useState([]);

  const navigate = useNavigate();

  const responseMessage = (response) => {
    console.log(response);
    navigate("/dashboard");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

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
            <GoogleLogin
              style={{ height: "10px" }}
              onSuccess={responseMessage}
              onError={errorMessage}
            />
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

export default Login;
