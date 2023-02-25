import React from "react";
import ButtonLogin from "./ButtonLogin";
import SplitAuth from "./SplitAuth";

const WrapperAuthentication = ({ children }) => {
  return (
    <div className="p-10 max-w-[580px] text-center mx-auto shadow-[3px_-5px_35px_rgba(205,_205,_212,_0.1)] rounded-[20px] bg-white mb-20">
      <div className="flex items-center justify-between gap-x-5 mb-[30px]">
        <ButtonLogin icon="Google"></ButtonLogin>
        <ButtonLogin icon="Apple"></ButtonLogin>
      </div>
      <SplitAuth></SplitAuth>
      {children}
    </div>
  );
};

export default WrapperAuthentication;
