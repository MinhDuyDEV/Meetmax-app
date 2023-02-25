import WrapperAuthentication from "../modules/authentication/WrapperAuthentication";
import TitleAuthentication from "../modules/authentication/TitleAuthentication";
import React from "react";
import CheckHaveAccount from "../modules/authentication/CheckHaveAccount";
import * as yup from "yup";
import { Input } from "../components/input";
import { Button } from "../components/button";
import {
  IconCalender,
  IconLock,
  IconMail,
  IconMale,
  IconSmile,
} from "../components/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Radio from "../components/checkbox/Radio";
import { gender } from "../utils/constant";

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
  const { handleSubmit, control, watch } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = (values) => {
    console.log("🚀 ~ handleSignUp ~ values:", values);
  };
  const watchGender = watch("gender");
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
          <div className="flex items-center w-full gap-x-5">
            <Input
              placeholder="Date of birth"
              name="date"
              type="text"
              className="mb-[30px]"
              control={control}
            >
              <IconCalender></IconCalender>
            </Input>
            <div className="flex items-center border-opacity-20 w-2/4 p-[17px] rounded-[10px] gap-x-[18px] mb-[30px] border border-gray">
              <IconMale></IconMale>
              <div className="flex items-center gap-x-5">
                <Radio
                  name="gender"
                  control={control}
                  checked={Number(watchGender === gender.MALE)}
                  value={gender.MALE}
                >
                  Male
                </Radio>
                <Radio
                  name="gender"
                  control={control}
                  checked={Number(watchGender === gender.FEMALE)}
                  value={gender.FEMALE}
                >
                  Female
                </Radio>
              </div>
            </div>
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
