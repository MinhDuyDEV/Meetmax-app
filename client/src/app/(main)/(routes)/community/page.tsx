"use client";

import FollowerList from "@/components/community/follower-list";
import FollowingList from "@/components/community/following-list";
import SuggestList from "@/components/community/suggest-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const CommunityPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <div className="p-30">
      <Tabs defaultValue={tab ? tab : "follower"} className="">
        <TabsList className="flex items-center justify-between gap-5 p-18 mb-18">
          <Link href="/community?tab=follower">
            <TabsTrigger value="follower">52,844 Followers</TabsTrigger>
          </Link>
          <Link href="/community?tab=following">
            <TabsTrigger value="following">2,564 Following</TabsTrigger>
          </Link>
          <Link href="/community?tab=suggest">
            <TabsTrigger value="suggest">People You Might Like</TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="follower">
          <FollowerList></FollowerList>
        </TabsContent>
        <TabsContent value="following">
          <FollowingList></FollowingList>
        </TabsContent>
        <TabsContent value="suggest">
          <SuggestList></SuggestList>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunityPage;
