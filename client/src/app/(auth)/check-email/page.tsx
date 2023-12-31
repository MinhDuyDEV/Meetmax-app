"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React from "react";

const CheckEmailPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <div className="container-auth">
      <div className="flex flex-col gap-5 items-center mb-8">
        <h2 className="text-3xl font-black">Check your email</h2>
        <p>
          We&apos;ve sent a link to your email address:{" "}
          <span className="text-blue-500">{email}</span>
        </p>
      </div>
      <Button className="mb-5 w-full bg-blue-500 hover:bg-blue-500/90">
        Skip now
      </Button>
      <div className="flex justify-center items-center gap-4">
        <p>Didn&apos;t receive an email?</p>
        <span className="text-blueText cursor-pointer p-1" onClick={() => {}}>
          Resend
        </span>
      </div>
    </div>
  );
};

export default CheckEmailPage;
