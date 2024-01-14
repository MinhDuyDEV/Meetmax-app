"use client";

import React from "react";
import InputMain from "./input-main";
import ListStory from "./list-story";
import ListFriendMain from "./list-friend-main";

const RightBar = () => {
  return (
    <div className="w-1/5 px-5 py-3 hidden gap-10 xl:flex flex-col sticky right-0 bg-grayWhite h-screen">
      <InputMain placeholder="Search Friends!"></InputMain>
      <ListStory></ListStory>
      <ListFriendMain></ListFriendMain>
    </div>
  );
};

export default RightBar;
