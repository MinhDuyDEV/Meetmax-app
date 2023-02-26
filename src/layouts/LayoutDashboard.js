import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../modules/dashboard/Header";
import RightBar from "../modules/dashboard/RightBar";
import SiteBar from "../modules/dashboard/SiteBar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="max-w-[1440px] h-screen m-auto">
      <Header></Header>
      <div className="flex">
        <SiteBar></SiteBar>
        <div className="flex-1 bg-gray bg-opacity-5 p-[30px] rounded-2xl">
          <Outlet></Outlet>
        </div>
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default LayoutDashboard;
