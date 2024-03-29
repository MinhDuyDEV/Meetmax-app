"use client";

import { cn } from "@/lib/utils";
import { TSidebarLink } from "@/types/general.types";
import Link from "next/link";
import React from "react";

interface SidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
  isNotActive: boolean;
}

const SidebarLink = ({ link, isActive, isNotActive }: SidebarLinkProps) => {
  return (
    <Link
      href={link.path}
      className={cn(
        "flex flex-col md:flex-row items-center md:py-3 px-3 py-1 md:px-5 md:space-x-5 md:rounded-10 rounded-sm cursor-pointer transition-all",
        isActive
          ? "md:bg-grayText md:text-grayWhite border-b-[3px] md:border-b-0 border-grayText"
          : "",
        isNotActive ? "hover:bg-gray-200 hover:text-grayText" : ""
      )}
    >
      <span>{link.icon}</span>
      <span className="font-normal text-[10px] md:text-base md:font-bold">
        {link.title}
      </span>
    </Link>
  );
};

export default SidebarLink;
