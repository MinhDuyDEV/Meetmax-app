"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const ItemBlockUser = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-2.5">
        <div className="relative rounded-full overflow-hidden w-10 h-10">
          <Image src="/avatar.png" width={40} height={40} alt="image"></Image>
        </div>
        <div className="flex flex-col">
          <p className="text-base">Taylor David</p>
          <div className="flex items-center gap-1">
            <p className="text-xs font-normal text-gray-400">Blocked</p>
            <span className="w-[4px] h-[4px] bg-gray-400 rounded-full"></span>
            <p className="text-xs font-normal text-gray-400">26/08/2021</p>
          </div>
        </div>
      </div>
      <Button className="text-sm text-grayWhite">Unblock</Button>
    </div>
  );
};

export default ItemBlockUser;
