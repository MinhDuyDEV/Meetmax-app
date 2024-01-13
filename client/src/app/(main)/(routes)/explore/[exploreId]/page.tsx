"use client";

import {
  IconClock,
  IconDocument,
  IconLike,
  IconLocation,
  IconShare,
} from "@/components/icons";
import IconCamera from "@/components/icons/icon-camera";
import Image from "next/image";
import React from "react";

const ExploreIdPage = () => {
  return (
    <div className="p-30 pt-9 h-full">
      <div className="bg-grayWhite p-30 rounded-xl h-full overflow-hidden">
        <div className="mb-30 text-sm text-gray-400">
          Explore/
          <span className="text-grayText">Companies</span>
        </div>
        <div className="grid grid-cols-3">
          <div className="mr-30 max-w-[730px] col-span-2">
            <div className="mb-10">
              <div className="relative w-[730px] h-[274px] overflow-hidden rounded-2xl mb-18">
                <Image
                  src="https://source.unsplash.com/random"
                  width={730}
                  height={274}
                  alt="image"
                  className="object-cover rounded-2xl"
                ></Image>
              </div>
              <h4>50 Photography Ideas to Improve Your Photography</h4>
              <p className="py-5">
                Are you stuck in a photographic rut? Are you looking to boost
                your creativity with new photography ideas? There are so many
                different photography techniques out there. Where do you start?
                Look no further. We have compiled a list of 50 of the most
                interesting photography ideas, ranging from simple
                post-production edits to day-long projects. You&apos;re sure to
                find something to whet your appetite, so join us as we run down
                our top 50 techniques.
              </p>
            </div>
            <div>
              Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Illo, dolores tempore. Officiis inventore dolorum esse sit numquam
              enim laudantium labore commodi odio provident, incidunt nisi.
              Quaerat hic asperiores fuga quos.
            </div>
          </div>
          <div className="pl-30 border-l border-gray-200 col-span-1">
            <div className="mb-18">Organizers</div>
            <div className="flex items-center justify-start gap-18 mb-18">
              <span className="px-2.5 py-3 rounded-md bg-red-100">
                <IconCamera></IconCamera>
              </span>
              <div className="flex flex-col">
                <p className="leading-6 text-base">Photography Ideas</p>
                <p className="leading-5 text-xs text-gray-400">
                  by Kayleigh Bysouth
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 mb-7">
              <div className="flex items-center justify-start gap-3">
                <IconDocument></IconDocument>
                <span className="text-sm font-normal">Companies</span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <IconClock></IconClock>
                <span className="text-sm font-normal">
                  Sunday, 15 August 2021
                </span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <IconLocation></IconLocation>
                <span className="text-sm font-normal">Sylhet, Bangladesh.</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="py-2.5 bg-gray-50 flex-1 rounded-lg flex items-center justify-center gap-2.5 cursor-pointer">
                <IconLike></IconLike>
                <span>Interested</span>
              </div>
              <span className="bg-gray-50 p-3 rounded-lg cursor-pointer">
                <IconShare></IconShare>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreIdPage;
