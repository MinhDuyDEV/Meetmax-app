import React from "react";

const User = () => {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <img
        src="/mixiface.png"
        alt=""
        className="object-cover w-[50px] h-[50px]"
      />
      <div className="flex flex-col text-gray">
        <span className="font-medium text-display">Sepural Gallery</span>
        <span className="font-normal text-body12 text-opacity-60">
          15h. Public
        </span>
      </div>
    </div>
  );
};

export default User;
