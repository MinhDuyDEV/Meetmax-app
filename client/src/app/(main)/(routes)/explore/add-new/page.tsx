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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { IconUpload } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  category: z.string(),
  title: z.string(),
  description: z.string(),
  // imageUrl: z.string(),
});

const dataCategoryFake = [
  {
    id: "1",
    value: "event",
    label: "Event",
  },
  {
    id: "2",
    value: "asks",
    label: "Asks",
  },
  {
    id: "3",
    value: "people",
    label: "People",
  },
  {
    id: "4",
    value: "jobs",
    label: "Jobs",
  },
  {
    id: "5",
    value: "projects",
    label: "Projects",
  },
  {
    id: "6",
    value: "companies",
    label: "Companies",
  },
];

const ExploreAddNewPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);
  }
  return (
    <div className="p-30 pt-9 h-full">
      <div className="bg-grayWhite p-30 rounded-xl h-full overflow-hidden">
        <div className="mb-30 text-sm text-gray-400">
          Explore/
          <span className="text-grayText">Add new</span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid 2xl:grid-cols-5 md:grid-cols-4 grid-cols-3">
              <div className="col-span-1 border-r h-screen gap-2.5">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="space-y-2.5">
                      <FormLabel className="text-base mb-2.5">
                        Select a Category
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2.5"
                        >
                          {dataCategoryFake.map((item) => (
                            <FormItem
                              key={item.id}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={item.value} />
                              </FormControl>
                              <FormLabel className="font-medium text-sm text-gray-400">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="md:col-span-3 2xl:col-span-4 col-span-2 px-30 flex flex-col gap-5">
                <div className="px-5 py-2.5 rounded-10 border border-gray-200">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Right a Title here"
                            {...field}
                            className="placeholder:text-sm font-normal"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="cursor-pointer flex items-center justify-center bg-gray-100 rounded-10 h-[242px]">
                  <span className="p-2 rounded-full bg-grayWhite shadow">
                    <IconUpload></IconUpload>
                  </span>
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Description here"
                            className="placeholder:text-sm font-normal min-h-[360px] placeholder:p-5 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-end gap-5">
                  <Link href="/explore">Cancel</Link>
                  <Button type="submit" className="py-2.5 px-7">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ExploreAddNewPage;
