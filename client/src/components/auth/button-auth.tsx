"use client";

import React from "react";
import { IconGoogle } from "../icons";

const ButtonAuth = () => {
  return (
    <div className="flex items-center justify-between gap-5 mb-8">
      <div className="flex items-center justify-center gap-6 w-[240px] rounded-lg bg-gray-50 py-3.5">
        <IconGoogle></IconGoogle>
        <span>Log in with Google</span>
      </div>
      <div className="flex items-center justify-center gap-6 w-[240px] rounded-lg bg-gray-50 py-3.5">
        <IconGoogle></IconGoogle>
        <span>Log in with Github</span>
      </div>
    </div>
  );
};

export default ButtonAuth;
