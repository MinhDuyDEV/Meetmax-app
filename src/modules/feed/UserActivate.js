import React from "react";

const UserActivate = ({ active = "" }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-5">
        <img
          src="/mixiface.png"
          alt=""
          className="object-cover w-10 h-10 rounded-full"
        />
        <span className="font-medium text-gray text-display">
          Kayleigh Bysouth
        </span>
      </div>
      {active === "online" ? (
        <span className="w-2 h-2 ml-auto rounded-full bg-green"></span>
      ) : (
        <span className="ml-auto font-medium text-body12 text-gray text-opacity-60">
          {active}
        </span>
      )}
    </div>
  );
};

export default UserActivate;
