"use client";

import HeaderMain from "@/components/main/header-main";
import SideBarMain from "@/components/main/sidebar-main";
import { usePathname } from "next/navigation";
import React from "react";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="bg-[#FFFFFF] h-full relative">
      {/* Header Main */}
      <div className="sticky inset-x-0 top-0 z-10">
        <HeaderMain></HeaderMain>
      </div>

      {/* Container */}
      <div className="flex relative">
        {/* Routes */}
        <div className="hidden md:flex flex-col w-[240px] sticky h-fit left-0 top-[78px] bg-grayWhite">
          <SideBarMain></SideBarMain>
        </div>
        {/* content */}
        <div className="flex-1 bg-gray-50 h-full rounded-3xl last:mr-30">
          {children}
        </div>
        {/* right bar */}
        {(pathname === "/feed" || pathname === "/community") && (
          <div className="hidden xl:flex flex-col w-[310px] sticky h-fit right-0 top-[78px] bg-grayWhite">
            right bar
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutMain;
