"use client";

import { IconLaptop, IconMessage } from "@/components/icons";
import ItemSecurityLogin from "@/components/settings/item-security-login";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchemaSMS = z.object({
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

const formSchemaChangePassword = z.object({
  currentPassword: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
  newPassword: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
  reNewPassword: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, {
      message: "Password must be at least 8 characters.",
    }),
});
const PasswordSecuritySettingPage = () => {
  const formChangePassword = useForm<z.infer<typeof formSchemaChangePassword>>({
    resolver: zodResolver(formSchemaChangePassword),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      reNewPassword: "",
    },
  });
  const formSMS = useForm<z.infer<typeof formSchemaSMS>>({
    resolver: zodResolver(formSchemaSMS),
    defaultValues: {
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmitChangePassword(
    values: z.infer<typeof formSchemaChangePassword>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  function onSubmitSMS(values: z.infer<typeof formSchemaSMS>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex flex-col gap-y-30 h-screen">
      <div>
        <h4 className="text-lg font-bold mb-18">Where You&apos;re Logged In</h4>
        <div className="grid grid-cols-2 mb-2.5 gap-18">
          <ItemSecurityLogin
            deviceName="Window PC"
            location="Vietnam"
            os="Chrome"
            status="Active"
            type="PC"
          ></ItemSecurityLogin>
          <ItemSecurityLogin
            deviceName="Window Laptop"
            location="Japan"
            os="Edge"
            status="Inactive"
            type="Laptop"
          ></ItemSecurityLogin>
          <ItemSecurityLogin
            deviceName="Huawei GT3"
            location="Dhaka, Bangladesh"
            os="Meetmax app"
            status="Inactive"
            type="Mobile"
          ></ItemSecurityLogin>
          <ItemSecurityLogin
            deviceName="Samsung Tab"
            location="Dhaka, Bangladesh"
            os="Chrome"
            status="Active"
            type="Tablet"
          ></ItemSecurityLogin>
        </div>
        <Link href="#" className="text-sm text-blueText">
          See All
        </Link>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-bold mb-3.5">Change Password</h4>
        <Form {...formChangePassword}>
          <form
            onSubmit={formChangePassword.handleSubmit(onSubmitChangePassword)}
          >
            <div className="flex flex-col gap-y-18 w-1/2 mb-2.5">
              <FormField
                control={formChangePassword.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter current password..."
                        className="py-2 px-5 border rounded-lg placeholder:text-sm font-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formChangePassword.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter new password..."
                        className="py-2 px-5 border rounded-lg placeholder:text-sm font-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formChangePassword.control}
                name="reNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Re-type new Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter new password..."
                        className="py-2 px-5 border rounded-lg placeholder:text-sm font-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-18 w-1/2">
              <Link
                href="/forgot-password"
                className="text-sm text-blueText mr-auto"
              >
                Forgot Password?
              </Link>
              <Button type="submit" className="px-5 py-2 ml-auto">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-18">Two-factor authentication</h4>
        <p className="mb-18">Text Message (SMS)</p>
        <div className="flex items-center gap-18 mb-18">
          <span className="flex flex-shrink-0">
            <svg
              width={42}
              height={44}
              viewBox="0 0 42 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 11.4118H30.5M11.5 20.8235H23.375M2 2H40V30.2353H21L9.125 42V30.2353H2V2Z"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 11.4118H30.5M11.5 20.8235H23.375M2 2H40V30.2353H21L9.125 42V30.2353H2V2Z"
                stroke="#4E5D78"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-sm font-normal max-w-[680px]">
            Use text message (SMS) to receive verification odes. For your
            protection, phone numbers used for two-factor authentication
            can&apos;t be used to reset your password when two-factor is on.
          </p>
        </div>
        <p className="mb-2.5">Phone Number</p>
        <Form {...formSMS}>
          <form onSubmit={formSMS.handleSubmit(onSubmitSMS)}>
            <div className="flex items-center gap-18">
              <FormField
                control={formSMS.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter phone number..."
                        className="py-2 px-5 border rounded-lg placeholder:text-sm font-normal"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="px-5 py-2">
                Active
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PasswordSecuritySettingPage;
