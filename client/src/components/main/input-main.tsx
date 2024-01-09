"use client";

import React from "react";
import { IconSearch } from "../icons";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface InputMainProps {
  className?: string;
  placeholder?: string;
}

const InputMain = ({
  className,
  placeholder = "Search for something here...",
}: InputMainProps) => {
  return (
    <div
      className={cn(
        "hidden xl:flex items-center h-[42px] rounded-10 gap-2.5 py-2.5 px-5 border border-gray-300 w-full ",
        className
      )}
    >
      <IconSearch></IconSearch>
      <Input
        placeholder={placeholder}
        className="placeholder:font-normal"
      ></Input>
    </div>
  );
};

export default InputMain;
