"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SettingPage = () => {
  const router = useRouter();
  return router.push("/settings/edit-profile");
  // return <div></div>;
};

export default SettingPage;
