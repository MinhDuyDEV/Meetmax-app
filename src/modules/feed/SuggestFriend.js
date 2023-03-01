import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "../../components/icons";

const SuggestFriend = () => {
  return (
    <div className="wrapperCard mb-[30px]">
      <div className="flex px-[18px] py-[10px] border items-center justify-between border-gray border-opacity-20 border-t-transparent border-r-transparent border-l-transparent">
        <span className="font-bold text-gray text-display">You Might Like</span>
        <NavLink to="/community" className="font-medium text-body13 text-blue">
          See All
        </NavLink>
      </div>
      <div className="px-[18px] pt-[20px] mb-[14px]">
        <div className="flex items-center gap-x-5">
          <img
            src="mixiface.png"
            alt=""
            className="object-cover w-[50px] h-[50px]"
          />
          <div className="flex flex-col">
            <span className="font-medium text-display text-gray">
              Radovan SkillArena
            </span>
            <span className="font-medium text-body12 text-gray text-opacity-60">
              Founder & CEO at Trophy
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto gap-x-4 mb-[24px]">
        <IconExplore></IconExplore>
        <IconFacebook></IconFacebook>
        <IconTwitter></IconTwitter>
        <IconInstagram></IconInstagram>
      </div>
      <div className="flex items-center gap-x-5 pb-[18px] mx-[18px]">
        <button
          type="button"
          className="border-gray text-gray border border-opacity-20 text-opacity-70 rounded-[6px] px-[36px] py-2"
        >
          Ignore
        </button>
        <button
          type="button"
          className="text-white bg-blue rounded-[6px] px-[35px] py-2"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default SuggestFriend;
