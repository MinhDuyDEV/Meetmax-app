import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconCommunity,
  IconHome,
  IconMessage,
  IconNotification,
  IconExplore,
  IconUser,
  IconSetting,
  IconLogout,
} from "../../components/icons";

const siteBarLinks = [
  {
    icon: <IconHome></IconHome>,
    title: "Feed",
    url: "/",
  },
  {
    icon: <IconCommunity></IconCommunity>,
    title: "My community",
    url: "/community",
  },
  {
    icon: <IconMessage></IconMessage>,
    title: "Messages",
    url: "/message",
  },
  {
    icon: <IconNotification></IconNotification>,
    title: "Notification",
    url: "/notification",
  },
  {
    icon: <IconExplore></IconExplore>,
    title: "Explore",
    url: "/explore",
  },
  {
    icon: <IconUser></IconUser>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconSetting></IconSetting>,
    title: "Settings",
    url: "/setting",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
];

const SiteBar = () => {
  const navLinkClass =
    "flex items-center gap-x-5 px-5 py-[15px] rounded-[10px] transition-all duration-200";
  return (
    <div className="w-[240px] pt-[10px] px-5 text-display flex flex-col gap-y-[10px]">
      {siteBarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button className={navLinkClass} key={link.title}>
              <span>{link.icon}</span>
              <span className="font-medium text-icon-color text-gray">
                {link.title}
              </span>
            </button>
          );
        }
        return (
          <NavLink
            to={link.url}
            key={link.title}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} text-white bg-gray font-bold`
                : `${navLinkClass} text-icon-color text-gray font-medium`
            }
          >
            <span>{link.icon}</span>
            <span>{link.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SiteBar;
