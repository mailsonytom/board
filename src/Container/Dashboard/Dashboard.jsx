import React, { useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import DataCard from "../../Components/DataCard/DataCard";
import LineCard from "../../Components/LineChart/LineCard";
import PieCard from "../../Components/PieChart/PieCard";
import ScheduleCard from "../../Components/ScheduleCard/ScheduleCard";

import total_revenues_icon from "../../Assets/total_revenues_icon.png";
import total_transactions_icon from "../../Assets/total_transactions_icon.png";
import total_likes_icon from "../../Assets/total_likes_icon.png";
import total_users_icon from "../../Assets/total_users_icon.png";

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly", {mode: "no-cors"}
        );
        console.log("Success", response);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main flex flex-row grid-cols-12">
      <div className="basis-72 p-8">
        <Sidebar />
      </div>
      <div className="col-span-7">
        <div>
          <Topbar />
        </div>
        <div className="data-card mt-2 grid grid-cols-4">
          <DataCard
            icon={total_revenues_icon}
            heading="Total Revenues"
            value="$2,129,430"
          />
          <DataCard
            icon={total_transactions_icon}
            heading="Total Transactions"
            value="1,520"
          />
          <DataCard
            icon={total_likes_icon}
            heading="Total Likes"
            value="9,721"
          />
          <DataCard icon={total_users_icon} heading="Total Users" value="892" />
        </div>
        <div>
          <LineCard />
        </div>
        <div className="grid grid-cols-12 mt-4">
          <div className="col-span-6">
            <PieCard />
          </div>
          <div className="col-span-6">
            <ScheduleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
