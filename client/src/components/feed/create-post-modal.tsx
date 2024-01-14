"use client";

import React from "react";
import { IconAngleDown, IconPicture, IconSmile, IconVideo } from "../icons";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "../ui/dialog-handle";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const FormSchema = z.object({
  type: z.enum(["friend", "public", "only-me"]),
  content: z.string(),
});

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const CreatePostModal = ({
  isOpen,
  onClose,
  onConfirm,
}: CreatePostModalProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    onConfirm();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Dialog open={isOpen} onOpenChange={onChange}>
          <DialogContent>
            <div className="flex flex-col">
              <div className="pb-18 border-gray-200 flex items-center justify-between mr-[52px]">
                <div className="text-base font-bold">Create a post</div>
                <div className="flex items-center gap-18">
                  <span className="text-sm text-opacity-80">Visible for</span>

                  <Popover>
                    <PopoverTrigger>
                      <div className="px-2.5 flex items-center justify-center gap-3 cursor-pointer">
                        <span className="text-sm text-blueText">Friends</span>
                        <IconAngleDown></IconAngleDown>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit p-30">
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="friend" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Friends
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="public" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Public
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="only-me" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Only me
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Separator className="bg-gray-200" />
              <div className="p-18 flex items-start gap-3.5">
                <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://source.unsplash.com/random"
                    width={42}
                    height={42}
                    alt="image"
                    className="rounded-full object-cover"
                  ></Image>
                </div>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          className="bg-gray-50 text-sm font-normal p-2.5 min-h-[110px]"
                          placeholder="What's happening?"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                earum quibusdam ipsa recusandae saepe dolores optio sed, ipsum
                esse excepturi praesentium fugiat autem asperiores, aliquam
                totam sit soluta quam unde.
              </div>
            </div>
            <div className="flex items-center justify-between gap-14">
              <div className="flex items-center justify-start gap-30">
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <IconVideo></IconVideo>
                  <p className="text-sm">Live Video</p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <IconPicture></IconPicture>
                  <p className="text-sm">Photo/Video</p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <IconSmile></IconSmile>
                  <p className="text-sm">Feeling</p>
                </div>
              </div>
              <Button type="submit" className="bg-blueText py-2 px-30">
                Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
};

export default CreatePostModal;
