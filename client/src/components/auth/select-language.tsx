"use client";

import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLanguage = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Vietnamese">Vietnamese</SelectItem>
          <SelectItem value="China">China</SelectItem>
          <SelectItem value="USA">USA</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
