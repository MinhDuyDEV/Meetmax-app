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
    <>
      {/* Desktop */}
      <aside className="hidden md:flex flex-col space-y-2.5 px-5 py-2.5 w-[240px] sticky h-fit left-0 top-[78px] bg-grayWhite">
        {sidebarLinks.map((link) => (
          <SidebarLink
            key={link.title}
            isActive={string.concat(pathname.split("/")[1]).includes(link.path)}
            isNotActive={
              !string.concat(pathname.split("/")[1]).includes(link.path)
            }
            link={link}
          ></SidebarLink>
        ))}
        <Link
          href="/sign-in"
          className="md:flex items-center py-3 px-5 space-x-5 rounded-10 cursor-pointer font-bold transition-all bg-grayWhite text-grayText"
        >
          <IconLogout></IconLogout>
          <span>Logout</span>
        </Link>
      </aside>

      {/* Mobile */}
      <aside className="md:hidden fixed inset-x-0 bottom-0 h-[56px] z-10 flex justify-between px-2.5 pt-2.5 pb-0.5 bg-grayWhite transition-all">
        {sidebarLinks.map(
          (link) =>
            link.path !== "/messages" &&
            link.path !== "/profile" && (
              <SidebarLink
                key={link.title}
                isActive={string
                  .concat(pathname.split("/")[1])
                  .includes(link.path)}
                isNotActive={
                  !string.concat(pathname.split("/")[1]).includes(link.path)
                }
                link={link}
              />
            )
        )}
      </aside>
    </>
  );
};

export default SideBarMain;
