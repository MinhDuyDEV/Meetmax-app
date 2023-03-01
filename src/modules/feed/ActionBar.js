import React from "react";
import { IconComment, IconHeart, IconShare } from "../../components/icons";

const ActionBar = () => {
  return (
    <div className="flex items-center justify-between py-3 border border-opacity-10 border-gray border-l-transparent border-r-transparent mb-[14px]">
      <div className="flex items-center gap-x-[10px]">
        <IconHeart></IconHeart>
        <span>Like</span>
      </div>
      <div className="flex items-center gap-x-[10px]">
        <IconComment></IconComment>
        <span>Comments</span>
      </div>
      <div className="flex items-center gap-x-[10px]">
        <IconShare></IconShare>
        <span>Share</span>
      </div>
    </div>
  );
};

export default ActionBar;
