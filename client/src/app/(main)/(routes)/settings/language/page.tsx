"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  language: z.string(),
});

const LanguageSettingPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ values:", values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <div className="flex flex-col h-screen">
      <h4 className="text-lg font-bold mb-18">Language</h4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/3 space-y-[18px]"
        >
          <FormLabel>Show Meetmax in this language.</FormLabel>
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a language to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="english">English (US)</SelectItem>
                    <SelectItem value="vietnamese">Vietnamese</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-start gap-4">
            <Button variant="outline" className="border-none py-2 px-6">
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

export default LanguageSettingPage;
