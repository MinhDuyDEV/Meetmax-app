"use client";

import React from "react";
import {
  IconActive,
  IconCloseEye,
  IconComingCall,
  IconMute,
  IconOther,
} from "../icons";
import ItemFriendMain from "./item-friend-main";
import { ScrollArea } from "../ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Button } from "../ui/button";

const FormSchema = z.object({
  message: z.boolean(),
  call: z.boolean(),
  status: z.boolean(),
});

const ListFriendMain = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      message: true,
      call: false,
      status: true,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);
  }
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="font-bold">Friends</span>
        <Popover>
          <PopoverTrigger asChild>
            <span className="py-1 px-3 cursor-pointer">
              <IconOther></IconOther>
            </span>
          </PopoverTrigger>
          <PopoverContent align="center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <div className="flex flex-col gap-2.5 pr-18 w-[284px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-18">
                      <IconMute />
                      <Label
                        className="text-base font-medium text-grayText"
                        htmlFor="message"
                      >
                        Message sounds
                      </Label>
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="message"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-18">
                      <IconMute />
                      <Label
                        className="text-base font-medium text-grayText"
                        htmlFor="call"
                      >
                        Call sounds
                      </Label>
                    </div>
                    <FormField
                      control={form.control}
                      name="call"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="call"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-18">
                      <IconActive />
                      <Label
                        className="text-base font-medium text-grayText"
                        htmlFor="status"
                      >
                        Turn off active status
                      </Label>
                    </div>
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="status"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </form>
            </Form>
          </PopoverContent>
        </Popover>
      </div>
      <ScrollArea className="h-[620px]">
        <div className="flex flex-col gap-18 ">
          {Array.from({ length: 20 }).map((_, index) => (
            <ItemFriendMain key={index}></ItemFriendMain>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListFriendMain;
