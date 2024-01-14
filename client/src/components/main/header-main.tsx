"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconMessage } from "@/components/icons";
import InputMain from "./input-main";

const HeaderMain = () => {
  return (
    <div className="flex items-center justify-between gap-5 py-5 px-6 bg-grayWhite">
      <Link href={"/messages"} className="md:hidden">
        <IconMessage />
      </Link>

      <div className="flex items-center justify-center md:justify-start flex-1">
        <Link
          href="/"
          className="hidden md:flex items-center justify-normal gap-2.5 mr-[108px]"
        >
          <Image src="/logo.png" width={26} height={26} alt="logo"></Image>
          <span className="text-lg font-bold text-grayText">Meetmax</span>
        </Link>
        <InputMain className="max-w-xs lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"></InputMain>
      </div>

      <Link
        href={"/profile"}
        className="flex items-center justify-center gap-5"
      >
        <span className="hidden md:inline">MinhDuy</span>
        <Image
          src="/avatar2.png"
          width={42}
          height={42}
          alt="avatar"
          className="object-cover rounded-10"
        ></Image>
      </Link>
    </div>
  );
};

export default HeaderMain;
