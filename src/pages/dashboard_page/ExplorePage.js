import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IconPlus } from "../../components/icons";

const ExplorePage = () => {
  return (
    <div className="bg-gray bg-opacity-[3%] p-[30px] rounded-2xl relative">
      <NavLink
        to="/explore/add-new"
        className="z-10 flex items-center justify-center bg-white w-[50px] h-[50px] rounded-full fixed top-0 right-0 -translate-x-full translate-y-full"
      >
        <IconPlus></IconPlus>
      </NavLink>
      <Outlet></Outlet>
    </div>
  );
};

export default ExplorePage;
