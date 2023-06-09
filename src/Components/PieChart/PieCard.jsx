import React from "react";
import PieChart from "./PieChart";
import "./PieChart.css";
import ColoredDot from "../ColoredDot";

function PieCard() {
  return (
    <div className="main-card grid grid-rows-12 p-8">
      <div className="grid grid-cols-12">
        <p className="col-span-4 text-lg font-bold">Top Products</p>
        <span className="col-span-4 col-start-9 text-end mt-1 cursor-pointer">
          May - June 2021
        </span>
      </div>
      <div className="grid grid-cols-12 mt-4">
        <div className="col-span-6">
          <PieChart />
        </div>
        <div className="col-span-6 grid grid-rows-12">
          <div className="grid grid-cols-12">
            <div className="col-span-1 mt-2">
              <ColoredDot color="#98D89E" />
            </div>
            <div className="col-span-8">
              <p className="items">Basic Tees</p>
              <span>55%</span>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-1 mt-2">
              <ColoredDot color="#F6DC7D" />
            </div>
            <div className="col-span-8">
              <p className="items">Custom Short Pants</p>
              <span>31%</span>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-1 mt-2">
              <ColoredDot color="#EE8484" />
            </div>
            <div className="col-span-8">
              <p className="items">Super Hoodies</p>
              <span>14%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieCard;
