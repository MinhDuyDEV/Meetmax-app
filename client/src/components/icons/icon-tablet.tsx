"use client";

import React from "react";

const IconTablet = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={36}
      height={40}
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.5 1.5H31.5C33.3278 1.5 34.5 2.7805 34.5 4V36C34.5 37.2195 33.3278 38.5 31.5 38.5H4.5C2.67217 38.5 1.5 37.2195 1.5 36V4C1.5 2.7805 2.67217 1.5 4.5 1.5Z"
        stroke="#38CB89"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 32.7273H18.0182"
        stroke="#38CB89"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTablet;
