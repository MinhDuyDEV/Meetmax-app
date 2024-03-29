"use client";

import React from "react";

const IconNotificationLove = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={8} cy={8} r={8} fill="#FF5630" />
      <circle cx={8} cy={8} r={8} fill="white" fillOpacity="0.8" />
      <path
        d="M4.59173 8.02073L7.28564 10.7708C7.67777 11.1711 8.32223 11.1711 8.71436 10.7708L11.4083 8.02073C11.7871 7.63395 12 7.10938 12 6.56239C12 5.42337 11.0955 4.5 9.9797 4.5C9.44388 4.5 8.93001 4.71729 8.55112 5.10406L8.35718 5.30205C8.16112 5.50219 7.83888 5.50219 7.64282 5.30205L7.44888 5.10406C7.07 4.71729 6.55612 4.5 6.02031 4.5C4.90452 4.5 4 5.42337 4 6.56239C4 7.10938 4.21285 7.63395 4.59173 8.02073Z"
        fill="#FF5630"
      />
    </svg>
  );
};

export default IconNotificationLove;
