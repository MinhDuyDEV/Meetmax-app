import React from "react";
import { NavLink } from "react-router-dom";

const communityLinks = [
  {
    url: "./followers",
    heading: "Followers",
  },
  {
    url: "./following",
    heading: "Following",
  },
  {
    url: "./suggest",
    heading: "People You Might Like",
  },
];
const CommunityTopBar = ({ quantity }) => {
  const navLinkClass =
    "w-[252px] py-[10px] rounded-[10px] text-center transition-all duration-200";
  return (
    <div className="flex items-center justify-between bg-white p-[18px] rounded-2xl mb-[18px] sticky top-[110px] overflow-hidden z-10">
      {communityLinks.map((link) => {
        if (link.url === "./suggest") {
          return (
            <NavLink
              to={link.url}
              key={link.heading}
              className={({ isActive }) =>
                isActive
                  ? `${navLinkClass} text-white bg-blue font-bold`
                  : `${navLinkClass} text-gray font-medium border border-gray border-opacity-20`
              }
            >
              <span>{link.heading}</span>
            </NavLink>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.heading}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-white bg-blue font-bold`
                : `${navLinkClass} text-gray font-medium border border-gray border-opacity-20`
            }
          >
            {quantity && <span>{quantity}</span>}
            <span>{link.heading}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default CommunityTopBar;
