"use client";

import React from "react";
import { IconBook, IconOther } from "../icons";
import RecentEventItem from "./recent-event-item";
import IconCamera from "../icons/icon-camera";

const RecentEvent = () => {
  return (
    <div className="container-card">
      <div className="px-18 py-2.5 border-b flex items-center justify-between">
        <p className="font-bold">Recent Event</p>
        <div className="p-[2px] cursor-pointer">
          <IconOther></IconOther>
        </div>
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
