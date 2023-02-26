import React from "react";
import { IconOther, IconSearch } from "../../components/icons";

const RightBar = () => {
  return (
    <div className="w-[310px] text-center px-5">
      <div className="relative inline-block">
        <input
          type="text"
          placeholder="Search Friends!"
          className="border outline-none text-gray text-body14 font-medium placeholder:font-normal placeholder:text-opacity-80 border-gray border-opacity-40 rounded-[10px] py-[10px] pr-[30px] pl-[50px] w-[270px]"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center translate-x-[20px] translate-y-full">
          <IconSearch></IconSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-5 mt-[30px]">
        <div className="flex flex-col gap-y-[10px] text-body14 font-medium text-gray">
          <img
            src="/mixiface.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full border-2 border-blue cursor-pointer object-cover"
          />
          <span>Saleh</span>
        </div>
        <div className="flex flex-col gap-y-[10px] text-body14 font-medium text-gray">
          <img
            src="/mixiface.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full border-2 border-blue cursor-pointer object-cover"
          />
          <span>Saleh</span>
        </div>
        <div className="flex flex-col gap-y-[10px] text-body14 font-medium text-gray">
          <img
            src="/mixiface.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full border-2 border-blue cursor-pointer object-cover"
          />
          <span>Saleh</span>
        </div>
        <div className="flex flex-col gap-y-[10px] text-body14 font-medium text-gray">
          <img
            src="/mixiface.png"
            alt=""
            className="w-[50px] h-[50px] rounded-full border-2 border-blue cursor-pointer object-cover"
          />
          <span>Saleh</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[30px] mr-[10px]">
        <span className="font-bold text-display text-gray">Friends</span>
        <IconOther></IconOther>
      </div>
    </div>
  );
};

export default RightBar;
