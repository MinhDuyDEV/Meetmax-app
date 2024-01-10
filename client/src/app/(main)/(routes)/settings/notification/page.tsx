"use client";

import {
  IconNotificationComment,
  IconNotificationLove,
  IconNotificationPost,
  IconNotificationShare,
  IconNotificationUser,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  like: z.boolean(),
  comment: z.boolean(),
  mention: z.boolean(),
  post: z.boolean(),
  share: z.boolean(),
  follow: z.boolean(),
  event: z.boolean(),
});

const NotificationSettingPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      like: true,
      comment: false,
      mention: true,
      post: true,
      share: false,
      follow: false,
      event: true,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);
  }
  return (
    <div className="flex flex-col h-screen gap-18">
      <h4 className="text-lg font-bold">Notifications</h4>
      <p>What Notifications You Receive</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3">
          <div className="flex flex-col gap-2.5">
            <FormField
              control={form.control}
              name="like"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationLove></IconNotificationLove>
                    </span>
                    <FormLabel className="text-base">Like</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationComment></IconNotificationComment>
                    </span>
                    <FormLabel className="text-base">Comment</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mention"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationUser></IconNotificationUser>
                    </span>
                    <FormLabel className="text-base">Mention</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationPost></IconNotificationPost>
                    </span>
                    <FormLabel className="text-base">Post</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="share"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationShare></IconNotificationShare>
                    </span>
                    <FormLabel className="text-base">Share</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="follow"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationUser></IconNotificationUser>
                    </span>
                    <FormLabel className="text-base">Follow</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="event"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <div className="gap-2.5 flex items-center">
                    <span>
                      <IconNotificationPost></IconNotificationPost>
                    </span>
                    <FormLabel className="text-base">Event</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button className="px-5 py-2 mt-8" type="submit">
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NotificationSettingPage;
