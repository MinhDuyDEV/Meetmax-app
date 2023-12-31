"use client";

import HeaderCard from "@/components/auth/header-card";
import { IconGoogle, IconLock, IconMail } from "@/components/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React from "react";
import ButtonAuth from "@/components/auth/button-auth";
import OrModule from "@/components/auth/or-module";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import InputText from "@/components/auth/input-text";
import InputPass from "@/components/auth/input-pass";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email("Please enter a valid email address."),
  password: z
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
  remember: z.boolean().default(false).optional(),
});

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <div>
      <HeaderCard
        heading="Sign In"
        description="Welcome back, you've been missed!"
      ></HeaderCard>
      <div className="container-auth">
        <ButtonAuth />
        <OrModule />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem
                  className={form.formState.errors.email ? "mb-3.5" : "mb-5"}
                >
                  <FormControl>
                    <InputText
                      icon={<IconMail></IconMail>}
                      placeholder="Your Email"
                      field={{ ...field }}
                    ></InputText>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem
                  className={form.formState.errors.password ? "mb-3.5" : "mb-5"}
                >
                  <FormControl>
                    <InputPass
                      icon={<IconLock></IconLock>}
                      placeholder="Enter Password"
                      field={{ ...field }}
                    ></InputPass>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2.5 ml-5">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="!mt-0 text-sm">Remember me</FormLabel>
                  </FormItem>
                )}
              />
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>
            <Button
              className="my-8 w-full bg-blue-500 hover:bg-blue-500/90"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        </Form>
        <p className="text-center">
          You haven&apos;t any account?{" "}
          <Link className="ml-5 p-1 text-blue-500" href="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
