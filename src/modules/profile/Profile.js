import React from "react";
import { IconEyeOn, IconUpload } from "../../components/icons";

const Profile = () => {
  return (
    <div className="wrapperCard mb-[30px]">
      <div className="relative">
        <img
          src="/bg-profile.png"
          alt=""
          className=" rounded-tr-2xl rounded-tl-2xl w-full h-[350px]"
        />
        <div className="absolute cursor-pointer bg-white flex items-center gap-x-[14px] py-[9px] pr-[15px] pl-[15px] bottom-[30px] right-[30px]  rounded-[10px]">
          <IconUpload></IconUpload>
          <span className="font-medium text-gray text-body14">
            Edit Cover Photo
          </span>
        </div>
        <div className="w-[158px] h-[158px] rounded-full bg-white bottom-0 absolute translate-x-[30px] translate-y-1/4">
          <img
            src="avatar.png"
            alt=""
            className="object-cover w-full h-full p-1 rounded-full "
          />
          <div className="absolute flex items-center justify-center -translate-y-3/4 cursor-pointer bottom-0 bg-white rounded-full right-1 w-[30px] h-[30px]">
            <IconUpload></IconUpload>
          </div>
        </div>
      </div>
      <div className="mx-[30px] mt-12 flex items-center justify-between pb-[30px]">
        <div className="flex flex-col">
          <h2 className="font-bold text-heading2 text-gray">Saleh Ahmed</h2>
          <span className="font-medium text-display text-gray text-opacity-60">
            UI Designer
          </span>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="flex items-center justify-center p-1 cursor-pointer">
            <IconEyeOn></IconEyeOn>
          </span>
          <button
            type="button"
            className="bg-gray rounded-[10px] bg-opacity-5 py-[9px] px-5"
          >
            Edit basic info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
