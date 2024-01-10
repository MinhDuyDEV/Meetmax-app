"use client";

import React from "react";
import { Input } from "../ui/input";

interface InputTextEditProfileProps {
  placeholder: string;
  field: any;
}

const InputTextEditProfile = ({
  placeholder,
  field,
}: InputTextEditProfileProps) => {
  return (
    <div className="px-2.5 py-4 border border-gray-200 placeholder:text-xs placeholder:text-gray-400 text-grayText rounded-lg flex items-center">
      <Input placeholder={placeholder} {...field}></Input>
    </div>
  );
};

export default InputTextEditProfile;
