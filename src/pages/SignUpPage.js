import React from "react";
import ButtonLogin from "../modules/authentication/ButtonLogin";
import SplitAuth from "../modules/authentication/SplitAuth";
import TitleAuthentication from "../modules/authentication/TitleAuthentication";

const SignUpPage = () => {
  return (
    <>
      <TitleAuthentication
        title="Getting Started"
        desc="Create an account to continue and connect with the people."
      ></TitleAuthentication>
      <div className="p-10 max-w-[580px] text-center mx-auto shadow-[3px_-5px_35px_rgba(205,_205,_212,_0.1)] rounded-[20px]">
        <div className="flex items-center gap-x-5 mb-[30px]">
          <ButtonLogin icon="Google"></ButtonLogin>
          <ButtonLogin icon="Google"></ButtonLogin>
        </div>
        <SplitAuth></SplitAuth>
      </div>
    </>
  );
};

export default SignUpPage;
