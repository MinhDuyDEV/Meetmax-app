"use client";

import React from "react";

const IconMobile = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={26}
      height={40}
      viewBox="0 0 26 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 4.44444C1.5 2.78225 2.8041 1.5 4.33333 1.5H21.6667C23.1959 1.5 24.5 2.78225 24.5 4.44444V35.5556C24.5 37.2178 23.1959 38.5 21.6667 38.5H4.33333C2.8041 38.5 1.5 37.2178 1.5 35.5556V4.44444Z"
        stroke="#38CB89"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconMobile;
