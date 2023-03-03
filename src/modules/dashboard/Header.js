import React from "react";
import { Link } from "react-router-dom";
import { IconSearch } from "../../components/icons";

const Header = () => {
  return (
    <div className="px-5 py-[18px] flex items-center bg-white sticky top-0 overflow-hidden z-10">
      <Link to="/" className="inline-block mr-[102px]">
        <img srcSet="/logo.png 2x" alt="logo" />
      </Link>
      <div className="relative inline-block">
        <input
          type="text"
          placeholder="Search for something here..."
          className="border outline-none text-gray text-body14 font-medium placeholder:font-normal placeholder:text-opacity-80 border-gray border-opacity-40 rounded-[10px] py-[10px] pr-[30px] pl-[50px] w-[542px]"
        />
        <div className="absolute top-0 left-0 flex items-center justify-center translate-x-[20px] translate-y-full">
          <IconSearch></IconSearch>
        </div>
      </div>
      <div className="flex items-center ml-auto gap-x-5">
        <span className="font-medium text-gray text-display">Saleh Ahmed</span>
        <img
          src="/mixiface.png"
          alt=""
          className="w-[42px] h-[42px] rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
