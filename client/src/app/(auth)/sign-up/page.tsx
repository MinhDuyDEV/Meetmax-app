"use client";

import ButtonAuth from "@/components/auth/button-auth";
import HeaderCard from "@/components/auth/header-card";
import InputText from "@/components/auth/input-text";
import OrModule from "@/components/auth/or-module";
import {
  IconFemale,
  IconLock,
  IconMail,
  IconMale,
  IconSmile,
} from "@/components/icons";
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
import React from "react";
import { Button } from "@/components/ui/button";
import InputPass from "@/components/auth/input-pass";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import IconCalendar from "@/components/icons/icon-calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email("Please enter a valid email address."),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
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
  birthday: z.date(),
  gender: z.string(),
});

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      gender: "male",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <HeaderCard
        heading="Getting Started"
        description="Create an account to continue and connect with the people."
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
                  className={form.formState.errors.name ? "mb-3.5" : "mb-5"}
                >
                  <FormControl>
                    <InputText
                      icon={<IconMail></IconMail>}
                      placeholder="Your Email"
                      field={{ ...field }}
                    ></InputText>
                  </FormControl>
                  <FormMessage className="text-sm font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem
                  className={form.formState.errors.name ? "mb-3.5" : "mb-5"}
                >
                  <FormControl>
                    <InputText
                      icon={<IconSmile></IconSmile>}
                      placeholder="Your Name"
                      field={{ ...field }}
                    ></InputText>
                  </FormControl>
                  <FormMessage className="text-sm font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem
                  className={form.formState.errors.name ? "mb-3.5" : "mb-5"}
                >
                  <FormControl>
                    <InputPass
                      icon={<IconLock></IconLock>}
                      placeholder="Create Password"
                      field={{ ...field }}
                    ></InputPass>
                  </FormControl>
                  <FormMessage className="text-sm font-normal" />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <div
                            className={cn(
                              "flex items-center gap-2.5 justify-start w-full px-5 py-3.5 rounded-10 border",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <IconCalendar></IconCalendar>
                            {field.value ? (
                              format(field.value, "dd/MM/yyyy")
                            ) : (
                              <span className="text-sm text-gray-400">
                                Date of birth
                              </span>
                            )}
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date: any) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-sm font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <div>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex items-center px-5 py-4 rounded-10 border"
                        >
                          <Label className="flex-1">
                            {field.value === "male" ? (
                              <IconMale></IconMale>
                            ) : (
                              <IconFemale></IconFemale>
                            )}
                          </Label>
                          <div className="flex items-center justify-center gap-5">
                            <FormItem className="flex items-center space-x-3.5 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="male" />
                              </FormControl>
                              <FormLabel
                                className={cn(
                                  "font-bold",
                                  field.value === "male"
                                    ? "text-grayText"
                                    : "text-gray-400"
                                )}
                              >
                                Male
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3.5 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="female" />
                              </FormControl>
                              <FormLabel
                                className={cn(
                                  "font-bold",
                                  field.value === "female"
                                    ? "text-grayText"
                                    : "text-gray-400"
                                )}
                              >
                                Female
                              </FormLabel>
                            </FormItem>
                          </div>
                        </RadioGroup>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className="my-8 w-full bg-blue-500 hover:bg-blue-500/90"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </Form>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="ml-5 p-1 text-blue-500" href="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
