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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

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
    defaultValues: {
      type: "friend",
      content: "",
    },
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
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="text-sm text-blueText">
                              <SelectValue
                                defaultValue="friend"
                                placeholder="Select a verified email to display"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="friend">Friends</SelectItem>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="only-me">Only me</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
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
