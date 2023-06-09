import React from "react";
import "./Topbar.css";
import NotificationIcon from "../../Assets/notification.png";
import profilepic from "../../Assets/prof_image.png";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const logout = () => {
    googleLogout();
    navigate("/login");
  };
  return (
    <div className="grid grid-cols-12 m-14">
      <div className="col-span-8 page-heading">
        <p>Dashboard</p>
      </div>
      <div className="col-span-4 grid grid-cols-9">
        <div className="input-with-image col-span-7">
          <input type="text" placeholder="Search..." />
          {/* <img src={SearchIcon} alt="Image" /> */}
        </div>
        <div className="col-span-1 cursor-pointer	">
          <img
            className="notiButton"
            src={NotificationIcon}
            alt="notification"
          />
        </div>
        <div className="col-span-1 ml-1 cursor-pointer">
          <img
            src={profilepic}
            className="rounded-full"
            alt="profile"
            onClick={logout}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
