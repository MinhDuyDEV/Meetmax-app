"use client";

import HeaderMain from "@/components/main/header-main";
import RightBar from "@/components/main/right-bar";
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
        <SideBarMain></SideBarMain>

        {/* content */}
        <div className="flex-1 bg-gray-50 h-full rounded-3xl last:mr-30 overflow-hidden">
          {children}
        </div>

        {/* right bar */}
        {(pathname === "/feed" ||
          pathname === "/community" ||
          pathname === "/notification") && <RightBar></RightBar>}
      </div>
    </div>
  );
};

export default LayoutMain;
