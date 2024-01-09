import {
  IconBell,
  IconBlocking,
  IconClock,
  IconCommunity,
  IconExplore,
  IconHome,
  IconLanguage,
  IconMessage,
  IconOpenEye,
  IconSecurity,
  IconSetting,
  IconUser,
} from "@/components/icons";
import { TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Feed",
    icon: <IconHome />,
    path: "/feed",
  },
  {
    title: "Community",
    icon: <IconCommunity />,
    path: "/community",
  },
  {
    title: "Messages",
    icon: <IconMessage />,
    path: "/messages",
  },
  {
    title: "Notification",
    icon: <IconBell />,
    path: "/notification",
  },
  {
    title: "Explore",
    icon: <IconExplore />,
    path: "/explore",
  },
  {
    title: "Profile",
    icon: <IconUser />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <IconSetting />,
    path: "/settings",
  },
];

export const sidebarLinksSetting: TSidebarLink[] = [
  {
    title: "Edit Profile",
    icon: <IconUser />,
    path: "/settings/edit-profile",
  },
  {
    title: "Language",
    icon: <IconLanguage />,
    path: "/settings/language",
  },
  {
    title: "Blocking",
    icon: <IconBlocking />,
    path: "/settings/blocking",
  },
  {
    title: "Notification",
    icon: <IconBell />,
    path: "/settings/notification",
  },
  {
    title: "Password & Security",
    icon: <IconSecurity />,
    path: "/settings/password-security",
  },
  {
    title: "Activity Log",
    icon: <IconClock />,
    path: "/settings/activity-log",
  },
  {
    title: "Viewing & Sharing",
    icon: <IconOpenEye />,
    path: "/settings/viewing-sharing",
  },
];
