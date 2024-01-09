"use client";

import Image from "next/image";
import React from "react";

interface ItemStoryProps {
  src: string;
  name: string;
}

const ItemStory = ({ src, name }: ItemStoryProps) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="cursor-pointer relative w-[50px] h-[50px] rounded-full border-2 border-blue-500 overflow-hidden">
        <Image
          src={src}
          width={50}
          height={50}
          alt="image-story"
          className="object-cover rounded-full"
        ></Image>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default ItemStory;
