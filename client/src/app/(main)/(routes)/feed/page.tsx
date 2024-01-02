"use client";

import CreatePost from "@/components/feed/create-post";
import Post from "@/components/feed/post";
import SuggestFriend from "@/components/feed/suggest-friend";
import React from "react";
import RecentEvent from "@/components/feed/recent-event";
import BirthdayCard from "@/components/feed/birthday-card";

const FeedPage = () => {
  return (
    <div className="grid gap-8 p-30 lg:grid-cols-2 grid-cols-1">
      <div className="grid grid-cols-1 gap-30 w-[512px] mx-auto">
        <CreatePost></CreatePost>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <div className="hidden xl:flex xl:flex-col w-[288px] mx-auto gap-30">
        <SuggestFriend></SuggestFriend>
        <RecentEvent></RecentEvent>
        <BirthdayCard></BirthdayCard>
      </div>
    </div>
  );
};

export default FeedPage;
