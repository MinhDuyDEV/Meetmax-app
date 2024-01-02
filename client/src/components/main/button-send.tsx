"use client";

import React from "react";
import { IconSend } from "../icons";

interface ButtonSendProps {
  onClick?: () => void;
}

const ButtonSend = ({ onClick }: ButtonSendProps) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer p-[11px] bg-blue-100 rounded-[5px]"
    >
      <IconSend></IconSend>
    </div>
  );
};

export default ButtonSend;
