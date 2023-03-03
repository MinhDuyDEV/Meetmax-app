import React from "react";
import { IconOther } from "../../components/icons";
import DisplayActionBar from "./DisplayActionBar";
import ActionBar from "./ActionBar";
import PostPhoto from "./PostPhoto";
import User from "./User";
import CommentBox from "./CommentBox";

const Post = () => {
  return (
    <div className="p-[18px] wrapperCard">
      <div className="flex items-center justify-between mb-[18px]">
        <User></User>
        <IconOther></IconOther>
      </div>
      <PostPhoto></PostPhoto>
      <DisplayActionBar></DisplayActionBar>
      <ActionBar></ActionBar>
      <CommentBox></CommentBox>
    </div>
  );
};

export default Post;
