import React from "react";
import { NavLink } from "react-router-dom";
import { IconPlus } from "../../components/icons";
import ExploreCard from "../../modules/explore/ExploreCard";

const ExplorePage = () => {
  return (
    <div className="bg-gray bg-opacity-[3%] p-[30px] rounded-2xl relative">
      <div className="grid grid-cols-3 gap-[30px]">
        <ExploreCard status="features"></ExploreCard>
        <ExploreCard status="features"></ExploreCard>
        <ExploreCard status="new"></ExploreCard>
        <ExploreCard status="new"></ExploreCard>
        <ExploreCard status="features"></ExploreCard>
        <ExploreCard status="new"></ExploreCard>
        <ExploreCard status="features"></ExploreCard>
        <ExploreCard status="features"></ExploreCard>
        <ExploreCard status="new"></ExploreCard>
        <ExploreCard status="features"></ExploreCard>
      </div>
      <NavLink
        to="/explore/add-new"
        className="flex items-center justify-center bg-white w-[50px] h-[50px] rounded-full fixed top-0 right-0 -translate-x-[300px] translate-y-[700px]"
      >
        <IconPlus></IconPlus>
      </NavLink>
    </div>
  );
};

export default ExplorePage;
