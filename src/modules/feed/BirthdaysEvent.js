import React from "react";
import { NavLink } from "react-router-dom";
import { IconBirthday, IconSend } from "../../components/icons";

const BirthdaysEvent = () => {
  return (
    <div className="wrapperCard mb-[30px]">
      <div className="flex px-[18px] py-[10px] border items-center justify-between border-gray border-opacity-20 border-t-transparent border-r-transparent border-l-transparent">
        <span className="font-bold text-gray text-display">Birthdays</span>
        <NavLink to="/community" className="font-medium text-body13 text-blue">
          See All
        </NavLink>
      </div>
      <div className="px-[18px] pt-5 pb-[18px]">
        <div className="flex items-center gap-x-5 mb-[10px]">
          <img
            src="mixiface.png"
            alt=""
            className="object-cover w-10 h-10 rounded-[6px]"
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
        <div className="flex items-center gap-x-[10px] mb-[18px]">
          <input
            type="text"
            placeholder="Write on his inbox"
            className="bg-gray bg-opacity-5 rounded-[10px] px-[10px] py-1 w-full text-body14 placeholder:text-body14 text-gray placeholder:font-normal font-medium outline-none"
          />
          <div className="p-[7px] rounded-[5px] bg-blue bg-opacity-10 cursor-pointer flex items-center justify-center">
            <IconSend></IconSend>
          </div>
        </div>
        <div className="p-[10px] bg-gray bg-opacity-[3%] rounded-[10px]">
          <div className="flex gap-x-5">
            <span className="flex items-center justify-center w-10 h-10 bg-yellow bg-opacity-20 rounded-[6px]">
              <IconBirthday></IconBirthday>
            </span>
            <div className="flex flex-1 flex-col font-medium gap-y-[2px]">
              <div className="text-display text-gray">Graduation Ceremony</div>
              <p className="text-body12 text-gray text-opacity-60">
                The graduation ceremony is also sometimes called...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdaysEvent;
