"use client";

import CreatePost from "@/components/feed/create-post";
import Post from "@/components/feed/post";
import React from "react";

const FeedPage = () => {
  return (
    <div className="grid gap-8 lg:gap-20 p-30 lg:grid-cols-2 grid-cols-1">
      <div className="grid grid-cols-1 gap-30 w-[512px] mx-auto">
        <CreatePost></CreatePost>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <div className="hidden lg:flex lg:flex-col max-w-[288px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        assumenda dignissimos debitis aliquam dicta neque iste repellat eligendi
        tenetur totam accusantium omnis perspiciatis quia, numquam a repellendus
        expedita quidem dolorum?
      </div>
    </div>
  );
};

export default FeedPage;
