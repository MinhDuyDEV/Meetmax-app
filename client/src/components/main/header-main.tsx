"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconSearch } from "../icons";
import { Input } from "../ui/input";

const HeaderMain = () => {
  return (
    <div className="flex items-center justify-between py-[18px] pl-5 pr-30 bg-grayWhite">
      <div className="flex items-center flex-1">
        <Link
          href="/"
          className="flex items-center justify-normal gap-2.5 mr-[108px]"
        >
          <Image src="/logo.png" width={26} height={26} alt="logo"></Image>
          <span className="text-lg font-bold text-gray-700">Meetmax</span>
        </Link>
        <div className="flex items-center rounded-10 gap-2.5 py-2.5 px-5 border border-gray-300 w-full max-w-[782px]">
          <IconSearch></IconSearch>
          <Input
            placeholder="Search for something here..."
            className="placeholder:font-normal"
          ></Input>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <span>MinhDuy</span>
        <Image
          src="/logo.png"
          width={42}
          height={42}
          alt="avatar"
          className="object-cover"
        ></Image>
      </div>
    </div>
  );
};

export default HeaderMain;
