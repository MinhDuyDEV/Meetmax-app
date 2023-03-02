import React from "react";
import { IconBook, IconCamera, IconOther } from "../../components/icons";
import Event from "./Event";

const RecentEvent = () => {
  return (
    <div className="wrapperCard mb-[30px]">
      <div className="flex px-[18px] py-[10px] border items-center justify-between border-gray border-opacity-20 border-t-transparent border-r-transparent border-l-transparent mb-[18px]">
        <span className="font-bold text-gray text-display">Recent Event</span>
        <span className="cursor-pointer">
          <IconOther></IconOther>
        </span>
      </div>
      <Event
        title="Graduation Ceremony"
        desc="The graduation ceremony is also sometimes called..."
        bg="green"
      >
        <IconBook></IconBook>
      </Event>
      <Event
        title="Photography Ideas"
        desc="Reflections. Reflections work because they can create..."
        bg="red"
      >
        <IconCamera></IconCamera>
      </Event>
    </div>
  );
};

export default RecentEvent;
