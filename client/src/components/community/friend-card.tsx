"use client";

import React from "react";
import {
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "../icons";
import Image from "next/image";
import { Button } from "../ui/button";

const FriendCard = () => {
  return (
    <div className="p-18 bg-grayWhite shadow-sm rounded-10 w-[260px]">
      <div className="flex items-center gap-5 mb-3.5">
        <div className="relative rounded-full overflow-hidden">
          <Image
            src="/avatar.png"
            width={50}
            height={50}
            alt="avatar"
            className="object-cover rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col">
          <p>Radovan SkillArena</p>
          <p className="text-xs text-gray-400">Founder & CEO at Trophy</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <IconExplore></IconExplore>
        <IconFacebook></IconFacebook>
        <IconTwitter></IconTwitter>
        <IconInstagram></IconInstagram>
      </div>
      <div className="flex items-center justify-between gap-5">
        <Button className="py-[6px] w-full" variant="outline">
          Ignore
        </Button>
        <Button className="py-[6px] w-full">Follow</Button>
      </div>
    </div>
  );
};

export default FriendCard;
