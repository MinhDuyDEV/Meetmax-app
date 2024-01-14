"use client";

import CreatePost from "@/components/feed/create-post";
import Post from "@/components/feed/post";
import SuggestFriend from "@/components/feed/suggest-friend";
import React from "react";
import RecentEvent from "@/components/feed/recent-event";
import BirthdayCard from "@/components/feed/birthday-card";

const FeedPage = () => {
  return (
    <div className="flex p-30 flex-col lg:flex-row gap-5">
      <div className="flex flex-col gap-30 lg:w-2/3">
        <CreatePost></CreatePost>
        {Array.from({ length: 9 }).map((_, index) => (
          <Post key={index}></Post>
        ))}
      </div>

      <div className="hidden gap-30 lg:flex lg:flex-col lg:w-1/3">
        <SuggestFriend></SuggestFriend>
        <RecentEvent></RecentEvent>
        <BirthdayCard></BirthdayCard>
      </div>
    </div>
  );
};

export default FeedPage;
