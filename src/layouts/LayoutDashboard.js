import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../modules/dashboard/Header";
import SiteBar from "../modules/dashboard/SiteBar";

const LayoutDashboard = () => {
  return (
    <div className="max-w-[1440px] w-full h-screen m-auto overflow-auto scrollbar-hide">
      <Header></Header>
      <div className="flex justify-start">
        <div>
          <SiteBar></SiteBar>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
