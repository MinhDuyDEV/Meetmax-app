"use client";

import React from "react";
import ItemStory from "./item-story";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const ListStory = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="flex items-center justify-start -ml-5">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <ItemStory src="/avatar.png" name={`MinhDuy${index}`}></ItemStory>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ListStory;
