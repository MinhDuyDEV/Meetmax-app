"use client";

import React from "react";
import { IconSend } from "../icons";
import { cn } from "@/lib/utils";

interface ButtonSendProps {
  onClick?: () => void;
  className?: string;
}

const ButtonSend = ({ onClick, className }: ButtonSendProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-center cursor-pointer p-[11px] bg-blue-100 rounded-[5px]",
        className
      )}
    >
      <IconSend></IconSend>
    </div>
  );
};

export default ButtonSend;
