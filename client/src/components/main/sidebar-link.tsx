"use client";

import { cn } from "@/lib/utils";
import { TSidebarLink } from "@/types/general.types";
import Link from "next/link";
import React from "react";

interface SidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}

const SidebarLink = ({ link, isActive }: SidebarLinkProps) => {
  return (
    <Link
      href={link.path}
      className={cn(
        "flex items-center py-3 px-5 space-x-5 rounded-10 cursor-pointer font-bold transition-all",
        isActive ? "bg-grayText text-grayWhite" : ""
      )}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
};

export default SidebarLink;
