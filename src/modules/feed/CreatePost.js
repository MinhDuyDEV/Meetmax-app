import React from "react";
import {
  IconPicture,
  IconSmile,
  IconVideoCamera,
} from "../../components/icons";

const CreatePost = () => {
  return (
    <div className="p-[18px] wrapperCard mb-[30px]">
      <div className="flex items-center gap-x-[14px] mb-[18px]">
        <img
          src="/mixiface.png"
          alt=""
          className="object-cover h-[42px] w-[42px]"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="w-full p-[10px] outline-none text-gray text-body14 font-medium placeholder:font-normal placeholder:text-opacity-80 bg-gray bg-opacity-[3%] rounded-[10px]"
        />
      </div>
      <div className="flex items-center gap-x-[30px] font-medium text-gray text-body14">
        <div className="flex items-center gap-x-[10px]">
          <IconVideoCamera></IconVideoCamera>
          <span>Live Video</span>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <IconPicture></IconPicture>
          <span>Photo/Video</span>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <IconSmile></IconSmile>
          <span>Feeling</span>
        </div>
        <button className="px-[30px] py-2 bg-blue rounded-lg text-white font-medium text-display ml-auto">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
