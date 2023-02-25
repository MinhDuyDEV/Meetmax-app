import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="w-full font-medium text-white mb-[30px] bg-blue py-[14px] text-display rounded-[10px]"
    >
      {children}
    </button>
  );
};

export default Button;
