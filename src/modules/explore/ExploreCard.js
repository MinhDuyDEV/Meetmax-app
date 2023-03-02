import React from "react";
import { NavLink } from "react-router-dom";
import { IconLink } from "../../components/icons";

const ExploreCard = ({
  status = "features",
  date = "Friday 13 August",
  heading = "How To Choose Best Bike For Spring In Bangladesh?",
  desc = "If you ever wish to buy a motorcycle for you than you must think a lot before buying...",
}) => {
  let color = "";
  if (status === "features") {
    color = "red";
  } else if (status === "new") {
    color = "green";
  }
  return (
    <div className="wrapperCard w-full max-w-[350px]">
      <img src="/image.png" alt="" />
      <div className="p-[18px]">
        <div className="flex items-center gap-x-[14px] mb-[18px]">
          <span
            className={`flex items-center justify-center text-${color} bg-${color} bg-opacity-20 px-[10px] text-body14 font-medium rounded-[2px]`}
          >
            {status === "features" && "Features"}
            {status === "new" && "New"}
          </span>
          <span className="font-medium text-body14 text-gray text-opacity-60">
            {date}
          </span>
        </div>
        <h3 className="font-bold text-heading3 text-gray mb-[14px]">
          {heading}
        </h3>
        <p className="font-normal text-body14 text-gray text-opacity-60 mb-[18px]">
          {desc}
        </p>
        <NavLink
          to="/"
          className="flex items-center gap-x-[14px] cursor-pointer"
        >
          <span className="font-medium uppercase text-body14 text-blue">
            READ MORE
          </span>
          <IconLink></IconLink>
        </NavLink>
      </div>
    </div>
  );
};

export default ExploreCard;
