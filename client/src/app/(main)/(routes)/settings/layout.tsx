"use client";

import { IconBell, IconUser } from "@/components/icons";
import { sidebarLinksSetting } from "@/constants/general.const";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import SidebarSettingLink from "@/components/settings/sidebar-setting";
import { usePathname } from "next/navigation";

const LayoutSetting = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="p-30">
      <div className="bg-grayWhite grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-3 rounded-xl h-ull">
        <div className="col-span-1 py-30 px-5 border-r transition-all border-gray-200 flex flex-col gap-2.5">
          {sidebarLinksSetting.map((link) => (
            <SidebarSettingLink
              key={link.title}
              link={link}
              isActive={pathname.includes(link.path)}
            ></SidebarSettingLink>
          ))}
        </div>
        <div className="md:col-span-3 2xl:col-span-4 col-span-2 p-30">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutSetting;
