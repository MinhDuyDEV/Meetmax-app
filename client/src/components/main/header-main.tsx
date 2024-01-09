"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconSearch } from "../icons";
import { Input } from "../ui/input";
import InputMain from "./input-main";

const HeaderMain = () => {
  return (
    <div className="flex items-center justify-between py-[18px] pl-5 pr-30 bg-grayWhite">
      <div className="flex items-center flex-1">
        <Link
          href="/"
          className="flex items-center justify-normal gap-2.5 mr-[108px]"
        >
          <Image src="/logo.png" width={26} height={26} alt="logo"></Image>
          <span className="text-lg font-bold text-grayText">Meetmax</span>
        </Link>
        <InputMain className="max-w-[782px]"></InputMain>
      </div>
      <div className="flex items-center justify-center gap-5">
        <span>MinhDuy</span>
        <Image
          src="/avatar2.png"
          width={42}
          height={42}
          alt="avatar"
          className="object-cover rounded-10"
        ></Image>
      </div>
    </div>
  );
};

export default HeaderMain;
