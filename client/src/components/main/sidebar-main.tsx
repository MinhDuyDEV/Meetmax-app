"use client";

import { sidebarLinks } from "@/constants/general.const";
import React from "react";
import SidebarLink from "./sidebar-link";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IconLogout } from "../icons";

const SideBarMain = () => {
  const pathname = usePathname();
  let string = "/";
  return (
    <div className="flex flex-col w-full space-y-2.5 px-5 py-2.5">
      {sidebarLinks.map((link) => (
        <SidebarLink
          key={link.title}
          isActive={string.concat(pathname.split("/")[1]).includes(link.path)}
          link={link}
        ></SidebarLink>
      ))}
      <Link
        href="/sign-in"
        className="flex items-center py-3 px-5 space-x-5 rounded-10 cursor-pointer font-bold transition-all bg-grayWhite text-grayText"
      >
        <IconLogout></IconLogout>
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default SideBarMain;
