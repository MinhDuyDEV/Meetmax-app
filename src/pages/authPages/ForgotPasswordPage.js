import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import TitleAuthentication from "../../modules/authentication/TitleAuthentication";
import { Input } from "../../components/input";
import { IconMail } from "../../components/icons";
import { Button } from "../../components/button";
import GroupForm from "../../modules/authentication/GroupForm";
import ErrorText from "./ErrorText";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Please enter your email address."),
  })
  .required();

const ForgotPasswordPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleForgotPassword = (values) => {
    console.log("🚀 ~ handleForgotPassword ~ values:", values);
  };
  return (
    <>
      <TitleAuthentication
        title="Forgot password?"
        desc="Enter your details to receive a rest link"
      ></TitleAuthentication>
      <div className="p-10 max-w-[580px] text-center mx-auto shadow-[3px_-5px_35px_rgba(205,_205,_212,_0.1)] rounded-[20px] bg-white mb-20">
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <GroupForm>
            <Input placeholder="Your Email" name="email" control={control}>
              <IconMail></IconMail>
            </Input>
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </GroupForm>
          <Button type="submit">Send</Button>
          <Link to="/sign-in" className="font-medium text-display text-blue">
            {"<"} Back to Sign In
          </Link>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
