import React from "react";
import "./ScheduleCard.css";
import VerticalLine from "../VerticalLine";

function ScheduleCard() {
  return (
    <div className="main-card grid grid-rows-12 p-8">
      <div className="grid grid-cols-12">
        <p className="col-span-5 text-lg font-bold">Today's schedule</p>
        <span className="col-span-4 col-start-9 text-end mt-1 see-all cursor-pointer">
          See All
        </span>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <VerticalLine color="#9BDD7C" />
        </div>
        <div className="col-span-10">
          <p className="content">Meeting with suppliers from Kuta Bali</p>
          <span className="timespan">14.00 - 15.00</span>
          <p className="timespan">at Sunset Road, Kuta, Bali</p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <VerticalLine color="#6972C3" />
        </div>
        <div className="col-span-10">
          <p className="content">Check operation at Giga Factory 1</p>
          <span className="timespan">18.00 - 20.00</span>
          <p className="timespan">at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
