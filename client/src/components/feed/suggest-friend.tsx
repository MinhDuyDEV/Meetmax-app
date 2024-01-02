"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconTwitter,
} from "../icons";
import { Button } from "../ui/button";

const SuggestFriend = () => {
  return (
    <div className="container-card">
      <div className="px-18 py-2.5 border-b border-gray-200 flex items-center justify-between">
        <p className="font-bold">You Might Like</p>
        <Link
          href="/community?suggest=true"
          className="text-[13px] text-blueText"
        >
          See All
        </Link>
      </div>
      <div className="pt-5 pb-18 px-18">
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
        <div className="flex items-center justify-between">
          <Button className="px-9" variant="outline">
            Ignore
          </Button>
          <Button className="px-9">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestFriend;
