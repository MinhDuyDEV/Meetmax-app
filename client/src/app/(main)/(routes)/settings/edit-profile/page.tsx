"use client";

import InputPass from "@/components/auth/input-pass";
import InputText from "@/components/auth/input-text";
import {
  IconCalendar,
  IconFemale,
  IconLock,
  IconMail,
  IconMale,
  IconSmile,
  IconUpload,
} from "@/components/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputTextEditProfile from "@/components/settings/input-text-edit-profile";
import ButtonAuth from "@/components/auth/button-auth";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

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
  birthday: z.date(),
  gender: z.string(),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  bio: z.string(),
  facebook: z.string(),
  twitter: z.string(),
  instagram: z.string(),
  linkedin: z.string(),
  website: z.string(),
  location: z.string(),
});

const EditProfileSettingPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      gender: "male",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <div className="flex flex-col">
      <h4 className="text-lg font-bold mb-18">Edit Profile</h4>
      <div className="relative w-[104px] h-[104px] overflow-hidden mb-30">
        <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-grayWhite p-2 rounded-full cursor-pointer flex-shrink-0 flex items-center justify-center">
          <IconUpload></IconUpload>
        </div>
        <Image
          width={104}
          height={104}
          alt="image"
          src="/profile_img.png"
          className="rounded-full object-cover"
        ></Image>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-30"
        >
          <div className="grid gap-x-30 gap-y-18 grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Full Name</FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="Saleh Ahmed"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Birthday</FormLabel>
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <div
                            className={cn(
                              "flex items-center gap-2.5 border-gray-200 justify-between w-full px-5 py-3.5 rounded-10 border",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "dd/MM/yyyy")
                            ) : (
                              <span className="text-sm text-gray-400">
                                Date of birth
                              </span>
                            )}
                            <span className="cursor-pointer p-1">
                              <IconCalendar></IconCalendar>
                            </span>
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
                    <FormMessage className="text-sm text-rose-500 font-normal" />
                  </FormItem>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Email</FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="yourmail@gmail.com"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Bio</FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="UI Designer"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="1712 345678"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Website</FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="uihut.com"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Gender</FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="UI Designer"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2.5 text-base">Location</FormLabel>
                  <FormControl>
                    <InputTextEditProfile
                      placeholder="Sylhet, Bangladesh"
                      field={{ ...field }}
                    ></InputTextEditProfile>
                  </FormControl>
                  <FormMessage className="text-sm text-rose-500 font-normal" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-18">Social link</h4>
            <div className="grid gap-x-30 gap-y-18 grid-cols-2">
              <FormField
                control={form.control}
                name="facebook"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2.5 text-base">Facebook</FormLabel>
                    <FormControl>
                      <InputTextEditProfile
                        placeholder="profile.salehahmed"
                        field={{ ...field }}
                      ></InputTextEditProfile>
                    </FormControl>
                    <FormMessage className="text-sm text-rose-500 font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2.5 text-base">Twitter</FormLabel>
                    <FormControl>
                      <InputTextEditProfile
                        placeholder="profile.salehahmed"
                        field={{ ...field }}
                      ></InputTextEditProfile>
                    </FormControl>
                    <FormMessage className="text-sm text-rose-500 font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2.5 text-base">
                      Instagram
                    </FormLabel>
                    <FormControl>
                      <InputTextEditProfile
                        placeholder="profile.salehahmed"
                        field={{ ...field }}
                      ></InputTextEditProfile>
                    </FormControl>
                    <FormMessage className="text-sm text-rose-500 font-normal" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2.5 text-base">LinkedIn</FormLabel>
                    <FormControl>
                      <InputTextEditProfile
                        placeholder="profile.salehahmed"
                        field={{ ...field }}
                      ></InputTextEditProfile>
                    </FormControl>
                    <FormMessage className="text-sm text-rose-500 font-normal" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-5">
            <Button variant="outline" className="border-none py-2 px-7">
              Cancel
            </Button>
            <Button type="submit" className="py-2 px-8">
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditProfileSettingPage;
