"use client";

import { IconSetting } from "@/components/icons";
import ListNotification from "@/components/notification/list-notification";
import React from "react";

const NotificationPage = () => {
  return (
    <div className="flex flex-col">
      <div className="p-5 flex items-center justify-between">
        <span className="font-bold">Notification</span>
        <IconSetting></IconSetting>
      </div>
      <ListNotification></ListNotification>
    </div>
  );
};

export default NotificationPage;
