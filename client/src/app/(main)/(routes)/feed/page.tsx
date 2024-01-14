"use client";

import CreatePost from "@/components/feed/create-post";
import Post from "@/components/feed/post";
import SuggestFriend from "@/components/feed/suggest-friend";
import React from "react";
import RecentEvent from "@/components/feed/recent-event";
import BirthdayCard from "@/components/feed/birthday-card";

const FeedPage = () => {
  return (
    <div className="flex p-30 justify-between lg:flex-row gap-5">
      <div className="flex flex-1 flex-col items-center justify-center">
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
  );
};

export default FeedPage;
