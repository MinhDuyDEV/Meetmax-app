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
      <HeaderMain></HeaderMain>
      <div className="flex">
        <div className="flex flex-col w-[240px] top-0 sticky">
          <SideBarMain></SideBarMain>
        </div>
        <div className="flex-1 p-30 bg-gray-50 h-full rounded-3xl mr-0 last:mr-30">
          {children}
        </div>
        {(pathname === "/feed" || pathname === "/community") && (
          <div className="flex flex-col w-[310px]">right bar</div>
        )}
      </div>
    </div>
  );
};

export default LayoutMain;
