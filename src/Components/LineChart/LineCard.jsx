import React from "react";
import LineChart from "./LineChart";
import ColoredDot from "../ColoredDot";

function LineCard() {
  return (
    <div className=" chartDiv mt-8">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <p className="heading">Activities</p>
          <span className="timespan">May - June 2021 </span>
        </div>
        <div className="legend col-span-2 col-start-11  grid grid-cols-12">
          <ColoredDot className="col-span-1" color="#E9A0A0" />
          <span className="col-span-5"> Guest</span>
          <ColoredDot className="col-span-1" color="#9BDD7C" />
          <span className="col-span-5">User</span>
        </div>
      </div>
      <LineChart />
    </div>
  );
}

export default LineCard;
