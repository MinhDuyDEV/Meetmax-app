"use client";

import React from "react";
import { Input } from "../ui/input";
import { IconGif, IconPicture, IconSmile } from "../icons";

const InputComment = () => {
  return (
    <div className="bg-gray-50 rounded-10 py-2 px-2.5 flex items-center w-full">
      <Input
        placeholder="Write a comment..."
        className="placeholder:text-sm placeholder:font-normal bg-transparent"
      ></Input>
      <div className="flex items-center gap-3.5">
        <div className="p-1 cursor-pointer">
          <IconGif></IconGif>
        </div>
        <div className="p-1 cursor-pointer">
          <IconPicture></IconPicture>
        </div>
        <div className="p-1 cursor-pointer">
          <IconSmile></IconSmile>
        </div>
      </div>
    </div>
  );
};

export default InputComment;
