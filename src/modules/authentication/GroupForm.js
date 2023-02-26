import React from "react";

const GroupForm = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col gap-y-[6px] mb-5 ${className}`}>
      {children}
    </div>
  );
};

export default GroupForm;
