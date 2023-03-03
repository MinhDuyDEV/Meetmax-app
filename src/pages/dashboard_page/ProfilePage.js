import React from "react";
import {
  IconBirthday,
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconLocation,
  IconTwitter,
  IconUser,
} from "../../components/icons";
import BirthdaysEvent from "../../modules/feed/BirthdaysEvent";
import CreatePost from "../../modules/feed/CreatePost";
import Post from "../../modules/feed/Post";
import RecentEvent from "../../modules/feed/RecentEvent";
import SuggestFriend from "../../modules/feed/SuggestFriend";
import Profile from "../../modules/profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <Profile></Profile>
      <div className="p-[30px] bg-gray bg-opacity-[3%] rounded-2xl flex gap-x-[30px] items-start justify-center">
        <div className="w-full max-w-[250px] wrapperCard p-[18px]">
          <div className="font-bold capitalize text-display text-gray mb-[18px]">
            INTRO
          </div>
          <div className="flex flex-col gap-y-[10px] mb-[18px]">
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconExplore></IconExplore>
              <span>tdtu.com</span>
            </div>
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconUser></IconUser>
              <span>Male</span>
            </div>
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconBirthday></IconBirthday>
              <span>Born Jan 22,2003</span>
            </div>
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconLocation></IconLocation>
              <span>Ho Chi Minh, Vietnam</span>
            </div>
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconFacebook></IconFacebook>
              <span>Facebook MinhDuyDev</span>
            </div>
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconTwitter></IconTwitter>
              <span>Twitter MinhDuyDev</span>
            </div>
            <div className="flex items-center font-medium gap-x-5 text-gray text-body14">
              <IconInstagram></IconInstagram>
              <span>Instagram NVMD6</span>
            </div>
            <div className="font-medium text-gray text-body14">
              52,844 Followers
            </div>
            <div className="font-medium text-gray text-body14">
              2,564 Following
            </div>
          </div>
          <button
            type="button"
            className="rounded-[10px] px-[70px] text-body14 text-gray font-medium py-[9px] bg-gray bg-opacity-[3%] mx-auto"
          >
            Edit Details
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-y-[30px] w-full max-w-[512px]">
          <CreatePost></CreatePost>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="flex-1 w-full max-w-[288px]">
          <SuggestFriend></SuggestFriend>
          <RecentEvent></RecentEvent>
          <BirthdaysEvent></BirthdaysEvent>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
