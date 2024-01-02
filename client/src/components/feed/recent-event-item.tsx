"use client";

import React from "react";
import { IconBook } from "../icons";
import { cn } from "@/lib/utils";

interface RecentEventItemProps {
  category: string;
  icon: React.ReactNode;
  heading: string;
  desc: string;
  seen: number;
}

const RecentEventItem = ({
  category,
  icon,
  heading,
  desc,
  seen,
}: RecentEventItemProps) => {
  return (
    <div className="flex flex-col bg-gray-50 rounded-10 p-2.5">
      <div className="flex items-center gap-5 border-b pb-2.5 border-gray-200">
        <div
          className={cn(
            "px-2.5 py-[13px] rounded-md",
            category === "book" && "bg-green-200",
            category === "camera" && "bg-red-200"
          )}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-[2px]">
          <p>{heading}</p>
          <p className="text-xs text-gray-400">{desc}</p>
        </div>
      </div>
      <div className="py-3 flex items-center justify-between">
        <p className="text-xs">{seen} seen</p>
        <div>avatar</div>
      </div>
    </div>
  );
};

export default RecentEventItem;
