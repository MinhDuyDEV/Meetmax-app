import React from "react";

const Event = ({ title = "", desc = "", children, bg = "" }) => {
  return (
    <div className="px-[18px] pb-[18px] flex flex-col gap-y-[18px]">
      <div className="p-[10px] bg-gray bg-opacity-[3%] rounded-[10px]">
        <div className="flex pb-2 border gap-x-5 border-gray border-opacity-20 border-t-transparent border-r-transparent border-l-transparent mb-[10px]">
          <span
            className={`flex items-center justify-center w-10 h-10 bg-opacity-20 rounded-[6px] bg-${bg}`}
          >
            {children}
          </span>
          <div className="flex flex-1 flex-col font-medium gap-y-[2px]">
            <div className="text-display text-gray">{title}</div>
            <p className="text-body12 text-gray text-opacity-60">{desc}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-body12 text-gray">8 seen</span>
          <span>Lorem, ipsum</span>
        </div>
      </div>
    </div>
  );
};

export default Event;
