"use client";

import React from "react";

interface HeaderCardProps {
  heading: string;
  description: string;
}

const HeaderCard = ({ heading, description }: HeaderCardProps) => {
  return (
    <div className="flex flex-col gap-2.5 items-center justify-center mb-8">
      <h2 className="text-3xl font-black">{heading}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HeaderCard;
