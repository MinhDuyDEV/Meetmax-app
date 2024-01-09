"use client";

import React from "react";
import InputMain from "./input-main";
import ListStory from "./list-story";
import ListFriendMain from "./list-friend-main";

const RightBar = () => {
  return (
    <div className="px-5 hidden gap-30 xl:flex flex-col w-[310px] sticky h-fit right-0 top-[78px] bg-grayWhite">
      <InputMain placeholder="Search Friends!"></InputMain>
      <ListStory></ListStory>
      <ListFriendMain></ListFriendMain>
    </div>
  );
};

export default RightBar;
