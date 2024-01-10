"use client";

import { cn } from "@/lib/utils";
import { TSidebarLink } from "@/types/general.types";
import Link from "next/link";
import React from "react";
import { IconAngleRight, IconUser } from "../icons";

interface SidebarSettingProps {
  link: TSidebarLink;
  isActive: boolean;
}

const SidebarSettingLink = ({ link, isActive }: SidebarSettingProps) => {
  return (
    <Link
      href={link.path}
      className={cn(
        "flex items-center transition-all justify-start gap-5 cursor-pointer pb-2.5 border-b border-gray-200",
        isActive ? "font-bold" : "font-normal"
      )}
    >
      <span className="w-4 h-4 flex-shrink-0 items-center justify-center">
        {link.icon}
      </span>
      <p className={cn("text-sm", isActive ? "font-bold" : "font-normal")}>
        {link.title}
      </p>
      {isActive && (
        <span className="ml-1">
          <IconAngleRight></IconAngleRight>
        </span>
      )}
    </Link>
  );
};

export default SidebarSettingLink;
