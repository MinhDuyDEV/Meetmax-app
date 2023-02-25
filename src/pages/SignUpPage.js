import WrapperAuthentication from "../modules/authentication/WrapperAuthentication";
import TitleAuthentication from "../modules/authentication/TitleAuthentication";
import React from "react";
import CheckHaveAccount from "../modules/authentication/CheckHaveAccount";
import * as yup from "yup";
// import { Radio } from "../components/checkbox";
import { Input } from "../components/input";
import { Button } from "../components/button";
import {
  IconCalender,
  IconLock,
  IconMail,
  IconSmile,
} from "../components/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Please enter your name."),
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Please enter your email address."),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/,
        {
          message:
            "Your password must have at least uppercase, 1 lowercase and 1 special characters",
        }
      )
      .required("Please enter your password"),
  })
  .required();

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = (values) => {
    console.log("🚀 ~ handleSignUp ~ values:", values);
  };
  return (
    <>
      <TitleAuthentication
        title="Getting Started"
        desc="Create an account to continue and connect with the people."
      ></TitleAuthentication>
      <WrapperAuthentication>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Input placeholder="Your Email" name="email" control={control}>
            <IconMail></IconMail>
          </Input>
          <Input placeholder="Your Name" name="name" control={control}>
            <IconSmile></IconSmile>
          </Input>
          <Input
            placeholder="Create Password"
            name="password"
            type="password"
            iconPassword
            control={control}
          >
            <IconLock></IconLock>
          </Input>
          <div className="flex items-center gap-x-5 mb-[10px]">
            <Input
              placeholder="Date of birth"
              name="date"
              type="text"
              control={control}
            >
              <IconCalender></IconCalender>
            </Input>
            {/* <div className="flex items-center gap-x-[14px] border-gray rounded-[10px] border-opacity-20">
              <Radio>Male</Radio>
              <Radio>Female</Radio>
            </div> */}
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <CheckHaveAccount text="Already have an account?" to="/sign-in">
          Sign In
        </CheckHaveAccount>
      </WrapperAuthentication>
    </>
  );
};

export default SignUpPage;
