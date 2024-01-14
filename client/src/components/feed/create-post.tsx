"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { IconAngleDown, IconPicture, IconSmile, IconVideo } from "../icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import CreatePostModal from "./create-post-modal";

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <CreatePostModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
      ></CreatePostModal>
      <div className="container-post flex flex-col justify-between gap-18">
        <div className="flex items-center justify-start gap-3.5">
          <div className="relative rounded-full overflow-hidden">
            <Image
              src="/mask.png"
              width={42}
              height={42}
              alt="avatar"
              className="object-cover rounded-full"
            ></Image>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex-1 p-2.5 bg-gray-50 h-full rounded-10 cursor-pointer"
          >
            <p className="text-sm text-gray-400 font-normal">
              What&apos;s happening?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4 xl:gap-6">
            <div className="flex items-center gap-1 flex-shrink-0">
              <IconVideo></IconVideo>
              <p className="text-sm xl:text-xs">
                Live{" "}
                <span className="hidden md:inline md:text-sm xl:text-xs">
                  Video
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <IconPicture></IconPicture>
              <p className="text-sm xl:text-xs">
                Photo
                <span className="hidden md:inline md:text-sm xl:text-xs">
                  /Video
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <IconSmile></IconSmile>
              <p className="text-sm xl:text-xs">Feeling</p>
            </div>
          </div>
          <Button className="bg-blueText h-fit">Post</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
