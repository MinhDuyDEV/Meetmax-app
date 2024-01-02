"use client";

import { IconSearch } from "@/components/icons";
import HeaderMain from "@/components/main/header-main";
import SideBarMain from "@/components/main/sidebar-main";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log("🚀 ~ LayoutMain ~ pathname:", pathname);
  return (
    <div className="bg-[#FFFFFF] h-full relative">
      {/* Header Main */}
      <div className="sticky inset-x-0 top-0 z-10">
        <HeaderMain></HeaderMain>
      </div>

      {/* Container */}
      <div className="flex relative">
        {/* Routes */}
        <div className="flex flex-col w-[240px] sticky h-fit left-0 top-[80px] bg-grayWhite">
          <SideBarMain></SideBarMain>
        </div>
        {/* content */}
        <div className="flex-1 bg-gray-50 h-full rounded-3xl">{children}</div>
        {/* right bar */}
        {(pathname === "/feed" || pathname === "/community") && (
          <div className="flex flex-col w-[310px] sticky h-fit right-0 top-[80px] bg-grayWhite">
            right bar
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutMain;
