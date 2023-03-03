import React from "react";
import RightBar from "../../modules/dashboard/RightBar";
import BirthdaysEvent from "../../modules/feed/BirthdaysEvent";
import CreatePost from "../../modules/feed/CreatePost";
import Post from "../../modules/feed/Post";
import RecentEvent from "../../modules/feed/RecentEvent";
import SuggestFriend from "../../modules/feed/SuggestFriend";

const FeedPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 bg-gray bg-opacity-[3%] p-[30px] rounded-2xl gap-x-[30px]">
        <div className="flex-1 flex flex-col gap-y-[30px] w-full max-w-[512px]">
          <CreatePost></CreatePost>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="flex-1 w-full max-w-[288px]">
          <SuggestFriend></SuggestFriend>
          <RecentEvent></RecentEvent>
          <BirthdaysEvent></BirthdaysEvent>
        </div>
      </div>
      <div>
        <RightBar></RightBar>
      </div>
    </div>
  );
};

export default FeedPage;
