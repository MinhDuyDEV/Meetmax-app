"use client";

import React from "react";

const IconNotificationShare = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill="#FFAB00" />
      <circle cx={8} cy={8} r={8} fill="white" fillOpacity="0.8" />
      <path
        d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
        fill="white"
      />
      <path
        d="M10 7.40348V8.66665M10 8.66665H8.8M10 8.66665L9.38648 8.0271C9.06557 7.66353 8.64924 7.42816 8.20022 7.35647C7.7512 7.28477 7.29381 7.38063 6.89696 7.6296C6.50012 7.87857 6.18532 8.19698 6 8.66665"
        stroke="#FFAB00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconNotificationShare;
