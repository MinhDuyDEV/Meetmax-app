"use client";

import ItemExplore from "@/components/explore/Item-explore";
import { IconLink, IconPlus } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExplorePage = () => {
  return (
    <div className="relative p-30 h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-30">
      <Link
        href="/explore/add-new"
        className="rounded-full fixed right-[30px] top-2/3 shadow w-[50px] bg-grayWhite h-[50px] flex items-center justify-center cursor-pointer"
      >
        <IconPlus></IconPlus>
      </Link>
      <ItemExplore
        type="Features"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="How To Choose Best Bike For Spring In Bangladesh?"
        desc="If you ever wish to buy a motorcycle for you than you must think a lot before buying..."
      ></ItemExplore>
      <ItemExplore
        type="News"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="How To Choose Best Bike For Spring In Bangladesh?"
        desc="If you ever wish to buy a motorcycle for you than you must think a lot before buying..."
      ></ItemExplore>
      <ItemExplore
        type="News"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="photography ideas for beginners using DSLR."
        desc="Before the days of DSLR — if you can remember such a time — taking a great..."
      ></ItemExplore>
      <ItemExplore
        type="Features"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="how to create web application using python?"
        desc="If you are looking for hotels near a street address, this simple search form will help you find lorem ipsum dolor sit amet, consectetur adipiscing elit."
      ></ItemExplore>
      <ItemExplore
        type="Features"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="How To Choose Best Bike For Spring In Bangladesh?"
        desc="If you ever wish to buy a motorcycle for you than you must think a lot before buying..."
      ></ItemExplore>
      <ItemExplore
        type="News"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="How To Choose Best Bike For Spring In Bangladesh?"
        desc="If you ever wish to buy a motorcycle for you than you must think a lot before buying..."
      ></ItemExplore>
      <ItemExplore
        type="News"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="photography ideas for beginners using DSLR."
        desc="Before the days of DSLR — if you can remember such a time — taking a great..."
      ></ItemExplore>
      <ItemExplore
        type="Features"
        image="https://source.unsplash.com/random"
        time="Friday 13 August"
        title="how to create web application using python?"
        desc="If you are looking for hotels near a street address, this simple search form will help you find lorem ipsum dolor sit amet, consectetur adipiscing elit."
      ></ItemExplore>
    </div>
  );
};

export default ExplorePage;
