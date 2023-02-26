import React from "react";
import { Button } from "../../components/button";
import CheckHaveAccount from "../../modules/authentication/CheckHaveAccount";
import TitleAuthentication from "../../modules/authentication/TitleAuthentication";

const CheckEmailPage = () => {
  return (
    <>
      <div className="p-10 max-w-[580px] text-center mx-auto shadow-[3px_-5px_35px_rgba(205,_205,_212,_0.1)] rounded-[20px] bg-white mb-20">
        <TitleAuthentication
          title="Check your email"
          desc="We've sent a link to your email address: "
          email="ahmed@gmail.com"
        ></TitleAuthentication>
        <Button type="button">Skip now</Button>
        <CheckHaveAccount text="Didn't receive an email?" to="/">
          Resend
        </CheckHaveAccount>
      </div>
    </>
  );
};

export default CheckEmailPage;
