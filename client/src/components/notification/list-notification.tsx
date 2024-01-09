"use client";

import React from "react";
import ItemNotification from "./item-notification";

const ListNotification = () => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 3 }).map((_, index) => (
        <ItemNotification
          avatar="/avatar2.png"
          content="Yazdan Khan Commented on your photo."
          name="Yazdan Khan"
          time="4 minutes ago"
          type="comment"
          active={true}
          key={index}
        ></ItemNotification>
      ))}
      {Array.from({ length: 3 }).map((_, index) => (
        <ItemNotification
          avatar="/avatar2.png"
          content="Yazdan Khan Commented on your photo."
          name="Yazdan Khan"
          time="4 minutes ago"
          active={true}
          type="love"
          key={index}
        ></ItemNotification>
      ))}
      {Array.from({ length: 3 }).map((_, index) => (
        <ItemNotification
          avatar="/avatar2.png"
          content="Yazdan Khan Commented on your photo."
          name="Yazdan Khan"
          time="4 minutes ago"
          type="user"
          key={index}
        ></ItemNotification>
      ))}
      {Array.from({ length: 3 }).map((_, index) => (
        <ItemNotification
          avatar="/avatar2.png"
          content="Yazdan Khan Commented on your photo."
          name="Yazdan Khan"
          time="4 minutes ago"
          type="post"
          key={index}
        ></ItemNotification>
      ))}
      {Array.from({ length: 3 }).map((_, index) => (
        <ItemNotification
          avatar="/avatar2.png"
          content="Yazdan Khan Commented on your photo."
          name="Yazdan Khan"
          time="4 minutes ago"
          type="share"
          key={index}
        ></ItemNotification>
      ))}
    </div>
  );
};

export default ListNotification;
