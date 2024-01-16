"use client";

import BirthdayCard from "@/components/feed/birthday-card";
import CreatePost from "@/components/feed/create-post";
import Post from "@/components/feed/post";
import RecentEvent from "@/components/feed/recent-event";
import SuggestFriend from "@/components/feed/suggest-friend";
import {
  IconBirthday,
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconLocation,
  IconOpenEye,
  IconTwitter,
  IconUpload,
  IconUser,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-full bg-grayWhite">
      <div className="pb-30 bg-grayWhite shadow-md rounded-10 mb-30">
        <div className="relative w-full h-[350px] mb-10">
          <Image
            src="https://source.unsplash.com/random"
            fill
            alt="image"
            className="object-cover rounded-[4px]"
          ></Image>
          <div className="absolute bg-grayWhite p-1 w-[158px] h-[158px] left-[30px] -bottom-[30px] rounded-full">
            {/* <div className="relative w-[150px] h-full rounded-full overflow-hidden">
            <Image
              src="https://source.unsplash.com/random"
              width={150}
              height={150}
              alt="image-profile"
              className="rounded-full object-cover z-10"
            ></Image>
          </div> */}
          </div>
          <div className="absolute bottom-[30px] right-[30px] rounded-10 shadow-sm px-3 bg-grayWhite py-2.5 flex items-center justify-center gap-3.5 cursor-pointer">
            <IconUpload></IconUpload>
            <span>Edit Cover Photo</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-30">
          <div className="flex flex-col">
            <h4>Saleh Ahmed</h4>
            <p>UI Designer</p>
          </div>
          <div className="flex items-center justify-center">
            <IconOpenEye></IconOpenEye>
            <div className="px-5 py-2.5 rounded-10 bg-gray-50">
              Edit basic info
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-30 rounded-xl grid grid-cols-[250px_minmax(512px,_1fr)_288px] gap-30">
        <div className="p-18 bg-grayWhite md:flex flex-col hidden h-fit rounded-2xl">
          <h4 className="font-bold mb-18">INTRO</h4>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-5">
              <IconExplore></IconExplore>
              <span className="text-sm">uihut.com</span>
            </div>
            <div className="flex items-center gap-5">
              <IconUser></IconUser>
              <span className="text-sm">Male</span>
            </div>
            <div className="flex items-center gap-5">
              <IconBirthday></IconBirthday>
              <span className="text-sm">Born June 18,2001</span>
            </div>
            <div className="flex items-center gap-5">
              <IconLocation></IconLocation>
              <span className="text-sm">HCM, Vietnam</span>
            </div>
            <div className="flex items-center gap-5">
              <IconFacebook></IconFacebook>
              <span className="text-sm">Facebook MinhDuy</span>
            </div>
            <div className="flex items-center gap-5">
              <IconTwitter></IconTwitter>
              <span className="text-sm">Twitter MinhDuy</span>
            </div>
            <div className="flex items-center gap-5">
              <IconInstagram></IconInstagram>
              <span className="text-sm">Instagram MinhDuy</span>
            </div>
            <div>52,844 Followers</div>
            <div>2,564 Following</div>
            <Button
              variant="secondary"
              className="bg-gray-50 rounded-10 py-2.5"
            >
              Edit Details
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-30 md:w-[512px] flex-shrink-0">
            <CreatePost></CreatePost>
            {Array.from({ length: 9 }).map((_, index) => (
              <Post key={index}></Post>
            ))}
          </div>
        </div>
        <div className="hidden gap-30 lg:flex lg:flex-col lg:w-[288px]">
          <SuggestFriend></SuggestFriend>
          <RecentEvent></RecentEvent>
          <BirthdayCard></BirthdayCard>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
