"use client";

import React from "react";
import { IconOther } from "../icons";
import ItemFriendMain from "./item-friend-main";
import { ScrollArea } from "../ui/scroll-area";

const ListFriendMain = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="font-bold">Friends</span>
        <IconOther></IconOther>
      </div>
      <ScrollArea className="h-[800px]">
        <div className="flex flex-col gap-18 ">
          {Array.from({ length: 20 }).map((_, index) => (
            <ItemFriendMain key={index}></ItemFriendMain>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListFriendMain;
