"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import HeaderCard from "@/components/auth/header-card";
import ButtonAuth from "@/components/auth/button-auth";
import OrModule from "@/components/auth/or-module";
import InputText from "@/components/auth/input-text";
import { IconMail } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email("Please enter a valid email address."),
});

const ForgotPasswordPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    router.push(`/check-email?email=${values.email}`);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <div>
      <HeaderCard
        heading="Forgot password?"
        description="Enter your details to receive a rest link"
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
            <Button
              className="mb-5 w-full bg-blue-500 hover:bg-blue-500/90"
              type="submit"
            >
              Send
            </Button>
          </form>
        </Form>
        <div className="flex justify-center">
          <Link className="p-1 text-blue-500 flex items-center" href="/sign-in">
            <ChevronLeft className="mr-2.5 w-4 h-4" />
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
