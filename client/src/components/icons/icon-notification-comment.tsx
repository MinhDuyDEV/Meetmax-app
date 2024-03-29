"use client";

import React from "react";

const IconNotificationComment = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill="#38CB89" />
      <circle cx={8} cy={8} r={8} fill="white" fillOpacity="0.8" />
      <path
        d="M11 4.5H5C4.44772 4.5 4 4.94772 4 5.5V9.25C4 9.66421 4.33579 10 4.75 10C5.16421 10 5.5 10.3358 5.5 10.75V11.2929C5.5 11.7383 6.03857 11.9614 6.35355 11.6464L7.70711 10.2929C7.89464 10.1054 8.149 10 8.41421 10H11C11.5523 10 12 9.55228 12 9V5.5C12 4.94772 11.5523 4.5 11 4.5Z"
        fill="#38CB89"
      />
    </svg>
  );
};

export default IconNotificationComment;
