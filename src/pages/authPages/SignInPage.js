import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleAuthentication from "../../modules/authentication/TitleAuthentication";
import WrapperAuthentication from "../../modules/authentication/WrapperAuthentication";
import { Input } from "../../components/input";
import { IconLock, IconMail } from "../../components/icons";
import { Checkbox } from "../../components/checkbox";
import { Button } from "../../components/button";
import CheckHaveAccount from "../../modules/authentication/CheckHaveAccount";
import GroupForm from "../../modules/authentication/GroupForm";
import ErrorText from "./ErrorText";

const schema = yup
  .object()
  .shape({
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

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignIn = (values) => {
    console.log("🚀 ~ handleSignIn ~ values:", values);
  };
  return (
    <>
      <TitleAuthentication
        title="Sign In"
        desc="Welcome back, you've been missed!"
      ></TitleAuthentication>
      <WrapperAuthentication>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <GroupForm className={errors.email && "mb-[14px]"}>
            <Input
              placeholder="Your Email"
              name="email"
              control={control}
              className={errors.email && "border-red focus:border-red"}
            >
              <IconMail></IconMail>
            </Input>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </GroupForm>
          <GroupForm className={errors.email && "mb-[14px]"}>
            <Input
              placeholder="Enter Password"
              type="password"
              name="password"
              iconPassword
              control={control}
              className={errors.password && "border-red focus:border-red"}
            >
              <IconLock></IconLock>
            </Input>
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </GroupForm>
          <div className="flex items-center justify-between mb-[30px] px-5">
            <Checkbox
              name="remember"
              text="Remember me"
              control={control}
            ></Checkbox>
            <Link
              to="/forgot-password"
              className="font-medium cursor-pointer text-body14 text-gray"
            >
              Forgot Password?
            </Link>
          </div>
          <Button type="submit">Sign In</Button>
        </form>
        <CheckHaveAccount text="You haven't any account?" to="/sign-up">
          Sign Up
        </CheckHaveAccount>
      </WrapperAuthentication>
    </>
  );
};

export default SignInPage;
