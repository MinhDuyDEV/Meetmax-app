"use client";

import CreatePost from "@/components/feed/create-post";
import Post from "@/components/feed/post";
import SuggestFriend from "@/components/feed/suggest-friend";
import React from "react";
import RecentEvent from "@/components/feed/recent-event";
import BirthdayCard from "@/components/feed/birthday-card";

const FeedPage = () => {
  return (
    <div className="grid gap-8 p-30 place-items-stretch lg:grid-cols-3 grid-cols-1">
      <div className="grid grid-cols-1 gap-30 w-[512px] mx-auto col-span-2">
        <CreatePost></CreatePost>
        {Array.from({ length: 9 }).map((_, index) => (
          <Post key={index}></Post>
        ))}
      </div>
      <div className="hidden md:flex md:flex-col w-[288px]  col-span-1 mx-auto gap-30">
        <SuggestFriend></SuggestFriend>
        <RecentEvent></RecentEvent>
        <BirthdayCard></BirthdayCard>
      </div>
    </div>
  );
};

export default FeedPage;
