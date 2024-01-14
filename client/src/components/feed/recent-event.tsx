"use client";

import React from "react";
import { IconBook, IconCloseEye, IconOther, IconReport } from "../icons";
import RecentEventItem from "./recent-event-item";
import IconCamera from "../icons/icon-camera";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const RecentEvent = () => {
  return (
    <div className="container-card">
      <div className="px-18 py-2.5 border-b flex items-center justify-between">
        <p className="font-bold">Recent Event</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="p-[2px] cursor-pointer">
              <IconOther></IconOther>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="p-18 flex flex-col gap-2.5"
          >
            <DropdownMenuItem className="text-grayText p-0">
              <IconCloseEye className="mr-18" />
              <span className="">Hide event</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconReport className="mr-18" />
              <span className="">Report event</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="pt-5 pb-18 px-18 flex flex-col gap-18">
        <RecentEventItem
          icon={<IconBook></IconBook>}
          seen={10}
          category="book"
          heading="Graduation Ceremony"
          desc="The graduation ceremony is also sometimes called..."
        ></RecentEventItem>
        <RecentEventItem
          icon={<IconCamera></IconCamera>}
          seen={9}
          category="camera"
          heading="Photography Ideas"
          desc="Reflections. Reflections work because they can create..."
        ></RecentEventItem>
      </div>
    </div>
  );
};

export default RecentEvent;
