import React, { useState } from "react";
import { IconEyeOff, IconEyeOn } from "../icons";

const Input = ({
  placeholder = "",
  type = "text",
  name = "t",
  iconPassword = false,
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative mb-5">
      {children && (
        <div className="absolute z-10 left-[20px] top-2/4 -translate-y-2/4">
          {children}
        </div>
      )}
      <input
        type={`${showPassword ? type : "password"}`}
        id={name}
        name={name}
        placeholder={placeholder}
        className="pr-5 pl-12 py-[18px] w-full text-gray text-body14 font-medium border border-gray rounded-[10px] border-opacity-20 outline-none placeholder:text-opacity-60 placeholder:text-gray placeholder:text-body14 placeholder:font-medium"
      />
      {iconPassword && (
        <div
          className="absolute right-[20px] top-2/4 -translate-y-2/4 select-none p-2 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IconEyeOn></IconEyeOn> : <IconEyeOff></IconEyeOff>}
        </div>
      )}
    </div>
  );
};

export default Input;
