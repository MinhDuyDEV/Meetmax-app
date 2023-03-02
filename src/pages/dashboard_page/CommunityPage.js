import React from "react";
import { Outlet } from "react-router-dom";
import CommunityTopBar from "../../modules/community/CommunityTopBar";
import RightBar from "../../modules/dashboard/RightBar";

const CommunityPage = ({ quantity }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-gray bg-opacity-[3%] p-[30px] rounded-2xl">
        <CommunityTopBar></CommunityTopBar>
        <Outlet></Outlet>
      </div>
      <RightBar></RightBar>
    </div>
  );
};

export default CommunityPage;
