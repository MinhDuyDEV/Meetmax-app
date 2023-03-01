import React from "react";
import {
  IconGif,
  IconPicture,
  IconSend,
  IconSmile,
} from "../../components/icons";

const CommentBox = () => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src="/mixiface.png"
        alt=""
        className="object-cover w-[38px] h-[38px]"
      />
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Write a comment..."
          className="py-2 w-full text-gray text-body14 font-medium placeholder:text-body14 placeholder:font-normal placeholder:text-opacity-60 bg-gray bg-opacity-5 pl-[10px] pr-[120px] outline-none rounded-[10px]"
        />
        <div className="absolute flex items-center gap-x-4 right-[14px] top-1/4">
          <span className="cursor-pointer">
            <IconGif></IconGif>
          </span>
          <span className="cursor-pointer">
            <IconPicture></IconPicture>
          </span>
          <span className="cursor-pointer">
            <IconSmile></IconSmile>
          </span>
        </div>
      </div>
      <div className="w-[38px] h-[38px] rounded-[5px] bg-blue bg-opacity-10 cursor-pointer flex items-center justify-center">
        <IconSend></IconSend>
      </div>
    </div>
  );
};

export default CommentBox;
