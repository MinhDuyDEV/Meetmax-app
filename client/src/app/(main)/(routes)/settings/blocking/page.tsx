"use client";

import { IconSearch } from "@/components/icons";
import ItemBlockUser from "@/components/settings/item-block-user";
import { Input } from "@/components/ui/input";
import React from "react";

const BlockingSettingPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <h4 className="text-lg font-bold mb-2.5">Block users</h4>
      <p className="text-sm font-normal mb-18">
        Once you block someone, that person can no longer see things you post on
        your timeline, tag you, invite you to events or groups, start a
        conversation with you, or add you as a friend. Note: Does not include
        apps, games or groups you both participate in
      </p>
      <div className="grid grid-cols-1 w-1/2 gap-18">
        <div className="flex items-center justify-between gap-5 py-2.5 px-5 rounded-10 border border-gray-300">
          <Input
            placeholder="Type a name"
            className="placeholder:text-sm placeholder:font-normal placeholder:text-gray-400"
          ></Input>
          <span className="cursor-pointer">
            <IconSearch></IconSearch>
          </span>
        </div>
        <p>Block users list</p>
        {Array.from({ length: 5 }).map((_, index) => (
          <ItemBlockUser key={index}></ItemBlockUser>
        ))}
      </div>
    </div>
  );
};

export default BlockingSettingPage;
