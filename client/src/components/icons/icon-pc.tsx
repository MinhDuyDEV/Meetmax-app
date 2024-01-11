"use client";

import React from "react";

const IconPC = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={40}
      height={38}
      viewBox="0 0 40 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 1.5H36C37.3807 1.5 38.5 2.61929 38.5 4V24C38.5 25.3807 37.3807 26.5 36 26.5H4C2.61929 26.5 1.5 25.3807 1.5 24V4C1.5 2.61929 2.61929 1.5 4 1.5Z"
        stroke="#377DFF"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 28V36"
        stroke="#377DFF"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 36H28"
        stroke="#377DFF"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconPC;
