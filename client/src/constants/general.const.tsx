import {
  IconBell,
  IconCommunity,
  IconExplore,
  IconHome,
  IconMessage,
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
