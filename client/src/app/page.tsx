"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  return router.push("/feed");
};

export default HomePage;
