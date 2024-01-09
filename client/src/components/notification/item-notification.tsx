"use client";

import Image from "next/image";
import React from "react";
import {
  IconNotificationComment,
  IconNotificationLove,
  IconNotificationPost,
  IconNotificationUser,
  IconNotificationShare,
} from "../icons";

interface ItemNotificationProps {
  type: string;
  avatar: string;
  name: string;
  time: string;
  content: string;
  active?: boolean;
}

const ItemNotification = ({
  avatar,
  content,
  time,
  type,
  active,
}: ItemNotificationProps) => {
  return (
    <div className="pt-2.5 pb-3 border-t px-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center">
          {type === "comment" && (
            <IconNotificationComment></IconNotificationComment>
          )}
          {type === "user" && <IconNotificationUser></IconNotificationUser>}
          {type === "post" && <IconNotificationPost></IconNotificationPost>}
          {type === "share" && <IconNotificationShare></IconNotificationShare>}
          {type === "love" && <IconNotificationLove></IconNotificationLove>}
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <Image
              src={avatar}
              width={40}
              height={40}
              alt="image"
              className="object-cover rounded-full"
            ></Image>
          </div>
          <div className="flex flex-col">
            <p>{content}</p>
            <p className="text-sm font-normal text-gray-400">{time}</p>
          </div>
        </div>
      </div>
      {active === true ? (
        <div className="w-2.5 h-2.5 bg-redText rounded-full"></div>
      ) : null}
      {type === "user" && (
        <div className="w-[120px] h-10 text-sm text-center py-[9px] px-5 bg-blueText text-grayWhite rounded-10">
          Follow back
        </div>
      )}
    </div>
  );
};

export default ItemNotification;
