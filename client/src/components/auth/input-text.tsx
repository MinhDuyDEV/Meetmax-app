"use client";

import React from "react";
import { IconMail } from "../icons";
import { Input } from "../ui/input";

interface InputTextProps {
  icon: React.ReactNode;
  placeholder: string;
  field: any;
}

const InputText = ({ icon, placeholder, field }: InputTextProps) => {
  return (
    <div className="px-5 py-4 border rounded-10 flex items-center gap-2.5">
      {icon}
      <Input placeholder={placeholder} {...field}></Input>
    </div>
  );
};

export default InputText;
