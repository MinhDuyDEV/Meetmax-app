"use client";
import React from "react";
import { IconLaptop, IconMobile, IconPC, IconTablet } from "../icons";
import { cn } from "@/lib/utils";

interface ItemSecurityLoginProps {
  type: "PC" | "Mobile" | "Tablet" | "Laptop";
  os: string;
  location: string;
  status: "Active" | "Inactive";
  deviceName: string;
}

const ItemSecurityLogin = ({
  type,
  location,
  os,
  deviceName,
  status,
}: ItemSecurityLoginProps) => {
  return (
    <div className="p-18 flex items-center justify-start gap-5 container-item-security-logged-in">
      {type === "PC" && <IconPC></IconPC>}
      {type === "Mobile" && <IconMobile></IconMobile>}
      {type === "Tablet" && <IconTablet></IconTablet>}
      {type === "Laptop" && <IconLaptop></IconLaptop>}
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-2">
          <p>{deviceName}</p>
          <span className="w-1 h-1 bg-grayText rounded-full"></span>
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-normal text-gray-400">{os}</p>
          <span className="w-1 h-1 bg-grayText rounded-full"></span>
          <p
            className={cn(
              "text-sm font-normal",
              status === "Active" && "text-greenText",
              status === "Inactive" && "text-redText"
            )}
          >
            {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemSecurityLogin;
