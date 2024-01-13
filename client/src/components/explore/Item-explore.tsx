"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconLink } from "../icons";
import { cn } from "@/lib/utils";

interface ItemExploreProps {
  type: "Features" | "News";
  image?: string;
  time: string;
  title: string;
  desc: string;
}

const ItemExplore = ({ desc, image, time, title, type }: ItemExploreProps) => {
  return (
    <div className="flex flex-col rounded-10 h-[430px] bg-grayWhite max-w-[350px] overflow-hidden flex-shrink-0 shadow-sm">
      <div className="relative h-[200px] w-[350px] overflow-hidden">
        <Image
          src={image || "https://source.unsplash.com/random"}
          width={350}
          height={200}
          alt="explore-image"
          className="object-cover flex-shrink-0"
        ></Image>
      </div>
      <div className="p-18">
        <div className="flex items-center justify-start gap-3.5 mb-18">
          <span
            className={cn(
              "px-2.5  rounded-sm ",
              type === "Features" && "bg-rose-100 text-redText",
              type === "News" && "bg-green-100 text-greenText"
            )}
          >
            {type}
          </span>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
        <h3 className="text-lg font-bold mb-3.5">{title}</h3>
        <p className="text-sm font-normal mb-18 text-gray-400">
          {desc.slice(0, 80) + "..."}
        </p>
        <Link href="/explore/:id" className="flex items-center gap-3.5">
          <span className="text-blueText text-sm">READ MORE</span>
          <IconLink></IconLink>
        </Link>
      </div>
    </div>
  );
};

export default ItemExplore;
