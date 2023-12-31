"use client";

import React from "react";
import { IconCloseEye, IconOpenEye } from "../icons";
import { Input } from "../ui/input";

interface InputPassProps {
  icon: React.ReactNode;
  placeholder: string;
  field: any;
}

const InputPass = ({ icon, placeholder, field }: InputPassProps) => {
  const [type, setType] = React.useState("password");
  return (
    <div className="px-5 py-4 border border-gray-200 rounded-10 flex items-center gap-2.5">
      {icon}
      <Input type={type} placeholder={placeholder} {...field}></Input>
      {type === "password" ? (
        <IconCloseEye
          className="cursor-pointer"
          onClick={() => setType("text")}
        ></IconCloseEye>
      ) : (
        <IconOpenEye
          className="cursor-pointer"
          onClick={() => setType("password")}
        ></IconOpenEye>
      )}
    </div>
  );
};

export default InputPass;
