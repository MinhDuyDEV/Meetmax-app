"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import ButtonSend from "../main/button-send";
import { IconBirthday } from "../icons";

const BirthdayCard = () => {
  return (
    <div className="container-card">
      <div className="flex items-center justify-between px-18 py-2.5 border-b border-gray-200">
        <p className="font-bold">Birthdays</p>
        <Link
          href="/feed/birthdays"
          className="text-blueText text-[13px] font-normal"
        >
          See All
        </Link>
      </div>
      <div className="pt-5 pb-18 px-18">
        <div className="flex items-center gap-5 mb-2.5">
          <div className="relative rounded-md w-10 h-10 overflow-hidden">
            <Image
              src="/avatar2.png"
              width={40}
              height={40}
              alt="avatar-birthday"
              className="object-cover rounded-md"
            ></Image>
          </div>
          <div className="flex flex-col">
            <p>Edilson De Carvalho</p>
            <p className="text-xs text-gray-400">Birthday today</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 mb-18">
          <Input
            className="bg-gray-50 rounded-10 py-1 px-2.5 placeholder:text-sm font-normal"
            placeholder="Write on inbox"
          ></Input>
          <ButtonSend className="w-[30px] h-[30px] p-[7px]"></ButtonSend>
        </div>
        <div className="p-2.5 bg-gray-50 flex items-center gap-5">
          <div className="p-2.5 bg-yellow-200 rounded-md flex items-center justify-center">
            <IconBirthday></IconBirthday>
          </div>
          <div className="flex flex-col">
            <p>Upcoming birthdays</p>
            <p className="text-xs text-gray-400">
              See 12 others have upcoming birthdays
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
