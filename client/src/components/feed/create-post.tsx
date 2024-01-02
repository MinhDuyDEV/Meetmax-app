"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IconPicture, IconSmile, IconVideo } from "../icons";

const CreatePost = () => {
  return (
    <div className="container-post flex flex-col justify-between gap-18">
      <div className="flex items-center justify-start gap-3.5">
        <div className="relative rounded-full overflow-hidden">
          <Image
            src="/mask.png"
            width={42}
            height={42}
            alt="avatar"
            className="object-cover rounded-full"
          ></Image>
        </div>
        <div className="flex-1 p-2.5 bg-gray-50 h-full rounded-10">
          <p className="text-sm text-gray-400 cursor-pointer font-normal">
            What&apos;s happening?
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-14">
        <div className="flex items-center justify-start gap-30">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <IconVideo></IconVideo>
            <p className="text-sm">Live Video</p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <IconPicture></IconPicture>
            <p className="text-sm">Photo/Video</p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <IconSmile></IconSmile>
            <p className="text-sm">Feeling</p>
          </div>
        </div>
        <Button className="bg-blueText py-2 px-30">Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
