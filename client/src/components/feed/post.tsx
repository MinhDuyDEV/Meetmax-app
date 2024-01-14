"use client";

import React from "react";
import {
  IconBell,
  IconCloseEye,
  IconComment,
  IconCopy,
  IconFacebook,
  IconHeart,
  IconInstagram,
  IconOther,
  IconReport,
  IconShare,
  IconTwitter,
  IconUnFollow,
} from "../icons";
import Image from "next/image";
import { Input } from "../ui/input";
import ButtonSend from "../main/button-send";
import InputComment from "./input-comment";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { BookUser } from "lucide-react";
import { Separator } from "../ui/separator";

const Post = () => {
  return (
    <div className="container-post flex flex-col flex-shrink-0">
      <div className="flex items-center justify-between mb-18">
        <div className="flex items-center justify-start gap-5">
          <Image src="/avatar.png" width={50} height={50} alt="avatar"></Image>
          <div className="flex flex-col">
            <p>Sepural Gallery</p>
            <p className="text-xs text-gray-400">15h. Public</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="cursor-pointer p-2">
              <IconOther></IconOther>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="p-18 flex flex-col gap-2.5"
          >
            <DropdownMenuItem className="text-grayText p-0">
              <IconCloseEye className="mr-18" />
              <span className="">Order details</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconBell className="mr-18" />
              <span className="">Turn on notification for this post</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconReport className="mr-18" />
              <span className="">Report this post</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconUnFollow className="mr-18" />
              <span className="">UnFollow</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative overflow-hidden mb-18">
        <Image
          src="/post_picture.png"
          width={476}
          height={268}
          alt="post_picture"
          className="rounded-2xl"
        ></Image>
      </div>
      <div className="flex items-center justify-between mb-3.5">
        <div>avatar</div>
        <div className="flex items-center gap-18">
          <p className="text-sm text-gray-400">3 Comments</p>
          <p className="text-sm text-gray-400">17 Share</p>
        </div>
      </div>
      <Separator className="bg-gray-200" />
      <div className="flex my-1 items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-100 py-2.5 px-3 rounded-md">
          <IconHeart></IconHeart>
          <p className="text-xs">Like</p>
        </div>
        <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-100 py-2.5 px-3 rounded-md">
          <IconComment></IconComment>
          <p className="text-xs">Comments</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-100 py-2.5 px-3 rounded-md">
              <IconShare></IconShare>
              <p className="text-xs">Share</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="p-18 flex flex-col gap-2.5"
          >
            <DropdownMenuItem className="text-grayText p-0">
              <IconShare className="mr-18" />
              <span className="">Share Now</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconFacebook className="mr-18" />
              <span className="">Facebook</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconTwitter className="mr-18" />
              <span className="">Twitter</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconInstagram className="mr-18" />
              <span className="">Instagram</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-grayText p-0">
              <IconCopy className="mr-18" />
              <span className="">Copy Link</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator className="bg-gray-200  mb-3.5" />
      <div className="flex items-center gap-3.5">
        <div className="relative overflow-hidden">
          <Image
            src="/mask.png"
            width={38}
            height={38}
            alt="avatar_comment"
            className="object-cover rounded-full"
          ></Image>
        </div>
        <InputComment></InputComment>
        <ButtonSend></ButtonSend>
      </div>
    </div>
  );
};

export default Post;
