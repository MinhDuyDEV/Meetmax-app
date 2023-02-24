import React from "react";
import { Link, Outlet } from "react-router-dom";
import { IconDown } from "../components/icons";

const LayoutAuthentication = () => {
  return (
    <div className="max-w-[1440px] min-h-screen pt-6 m-auto">
      <div className="h-[78px] flex items-center justify-between mb-[55px]">
        <Link to="/" className="inline-block my-auto">
          <img srcSet="/logo.png 2x" alt="logo" />
        </Link>
        <div className="flex items-center px-5 py-2 gap-x-5">
          <span>English (UK)</span>
          <IconDown></IconDown>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutAuthentication;
