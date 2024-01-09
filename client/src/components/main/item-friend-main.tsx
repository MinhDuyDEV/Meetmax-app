"use client";

import Image from "next/image";
import React from "react";

const ItemFriendMain = () => {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center justify-start gap-5">
        <div className="relative w-10 h-10 overflow-hidden">
          <Image
            src="/avatar2.png"
            width={40}
            height={40}
            alt="img"
            className="object-cover rounded-full"
          ></Image>
        </div>
        <span>MinhDuy</span>
      </div>
      <span className="w-2 h-2 rounded-full bg-green-500 mr-4"></span>
    </div>
  );
};

export default ItemFriendMain;
