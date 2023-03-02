import React from "react";
import {
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "../../components/icons";

const Friend = ({ following }) => {
  return (
    <div className="wrapperCard p-[18px] max-w-[264px] w-full">
      <div className="flex items-center gap-x-[18px] mb-[26px]">
        <img
          src="/mixiface.png"
          alt=""
          className="object-cover rounded-full w-[70px] h-[70px]"
        />
        <div className="flex flex-col">
          <span className="font-medium text-display text-gray">
            Radovan SkillArena
          </span>
          <span className="mb-[14px] font-medium text-gray text-opacity-60 text-body12">
            Founder & CEO at Trophy
          </span>
          <div className="flex items-center gap-x-4">
            <IconExplore></IconExplore>
            <IconFacebook></IconFacebook>
            <IconTwitter></IconTwitter>
            <IconInstagram></IconInstagram>
          </div>
        </div>
      </div>
      {following ? (
        <div className="flex items-center justify-between gap-x-5">
          <button
            type="button"
            className="border-gray text-gray border border-opacity-20 text-opacity-70 rounded-[6px] px-[19px] py-[6px]"
          >
            Followed
          </button>
          <button
            type="button"
            className="border-gray text-gray border border-opacity-20 text-opacity-70 rounded-[6px] px-[20px] py-[6px]"
          >
            Unfollow
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-x-5">
          <button
            type="button"
            className="border-gray text-gray border border-opacity-20 text-opacity-70 rounded-[6px] px-[29px] py-[6px]"
          >
            Ignore
          </button>
          <button
            type="button"
            className="text-white bg-blue rounded-[6px] px-[29px] py-[6px]"
          >
            Follow
          </button>
        </div>
      )}
    </div>
  );
};

export default Friend;
