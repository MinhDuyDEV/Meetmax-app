"use client";

import SelectLanguage from "@/components/auth/select-language";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LayoutAuthentication = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full bg-[#ffffff] relative">
      <div className="flex items-center justify-between px-8 py-6 mb-8 sticky top-0">
        <Link href="/" className="flex items-center justify-normal gap-2.5">
          <Image src="/logo.png" width={26} height={26} alt="logo"></Image>
          <span className="text-lg font-bold text-gray-700">Meetmax</span>
        </Link>
        <div>
          <SelectLanguage></SelectLanguage>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default LayoutAuthentication;
