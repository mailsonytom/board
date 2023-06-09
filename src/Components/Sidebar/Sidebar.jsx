import React from "react";
import "./Sidebar.css";
import DashboardIcon from "../../Assets/dashboard_icon.png";
import TransationIcon from "../../Assets/transaction_icon.png"
import ScheduleIcon from "../../Assets/schedule_icon.png"
import UserIcon from "../../Assets/user_icon.png"
import SettingsIcon from "../../Assets/setting_icon.png"

function Sidebar() {
  return (
    <div className="bg-black p-11 rounded-3xl h-full text-white text-left">
      <p className="heading">Board.</p>
      <ul className="mt-12">
        <li className="menu-items text-lg font-bold grid grid-cols-12">
          <img src={DashboardIcon} alt="" className="col-span-3" />
          <span>Dashboard</span>
        </li>
        <li className="menu-items grid grid-cols-12">
          <img src={TransationIcon} alt="" className="col-span-3" />
          <span> Transactions</span>{" "}
        </li>
        <li className="menu-items grid grid-cols-12">
          <img src={ScheduleIcon} alt="" className="col-span-3" />
          <span> Schedules</span>{" "}
        </li>
        <li className="menu-items grid grid-cols-12">
          <img src={UserIcon} alt="" className="col-span-3" />
          <span> Users</span>{" "}
        </li>
        <li className="menu-items grid grid-cols-12">
          <img src={SettingsIcon} alt="" className="col-span-3" />
          <span> Settings</span>{" "}
        </li>
      </ul>
      <div className="subs">
        <p>Help</p>
        <p className="mt-4">Contact Us</p>
      </div>
    </div>
  );
}

export default Sidebar;
