import React from "react";
import { Link } from "react-router-dom";
import { Radio } from "../components/checkbox";
import {
  IconCalender,
  IconLock,
  IconMail,
  IconMale,
  IconSmile,
} from "../components/icons";
import { Input } from "../components/input";
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
      <div className="p-10 max-w-[580px] text-center mx-auto shadow-[3px_-5px_35px_rgba(205,_205,_212,_0.1)] rounded-[20px] bg-white mb-20">
        <div className="flex items-center justify-between gap-x-5 mb-[30px]">
          <ButtonLogin icon="Google"></ButtonLogin>
          <ButtonLogin icon="Google"></ButtonLogin>
        </div>
        <SplitAuth></SplitAuth>
        <Input placeholder="Your Email" id="email">
          <IconMail></IconMail>
        </Input>
        <Input placeholder="Your Name" id="name">
          <IconSmile></IconSmile>
        </Input>
        <Input placeholder="Create Password" id="password" iconPassword>
          <IconLock></IconLock>
        </Input>
        <div className="flex items-center gap-x-5 mb-[10px]">
          <Input placeholder="Date of birth" id="calender" type="text">
            <IconCalender></IconCalender>
          </Input>
          <div className="flex items-center gap-x-[14px] border-gray rounded-[10px] border-opacity-20">
            <Radio>Male</Radio>
            <Radio>Female</Radio>
          </div>
        </div>
        <button
          type="button"
          className="w-full font-medium text-white mb-[30px] bg-blue py-[14px] text-display rounded-[10px]"
        >
          Sign Up
        </button>
        <div className="flex items-center justify-center font-medium text-display gap-x-5">
          <span className="text-gray">Already have an account?</span>
          <Link to="/sign-in" className="text-blue">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
