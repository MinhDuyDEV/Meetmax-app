import React from "react";
import RightBar from "../../modules/dashboard/RightBar";
import CreatePost from "../../modules/feed/CreatePost";

const FeedPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 bg-gray bg-opacity-[3%] p-[30px] rounded-2xl gap-x-[30px]">
        <div className="w-full min-w-[512px]">
          <CreatePost></CreatePost>
        </div>
        <div className=" bg-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur
          dolores illo, culpa nesciunt aut aliquid exercitationem quia
          reiciendis nihil! Fugiat beatae nemo inventore minus doloribus alias
          placeat modi debitis.
        </div>
      </div>
      <RightBar></RightBar>
    </div>
  );
};

export default FeedPage;
