import { homeUrl, mediumUrl, telegramUrl, twitterUrl } from "@/utils/config";
import { FaDollarSign, FaLock, FaMoneyBill, FaPaintBrush, FaPiggyBank } from "react-icons/fa";
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ForwardRefExoticComponent, SVGProps } from "react";
import { DocumentIcon } from "@heroicons/react/20/solid";

type NavigationItem = {
  name: string;
  icon:
    | React.ComponentType<{ className: string }>
    | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
  current: boolean;
  href?: string;
  children?: NavigationItemChildren[];
};

type NavigationItemChildren = {
  name: string;
  href: string;
};

export const HeaderList: NavigationItem[] = [
  {
    name: "Home",
    icon: HomeIcon,
    current: false,
    href: homeUrl,
  },
  {
    name: "Stake",
    href: "/",
    icon: FaLock,
    current: false,
  },
  {
    name: "NFTs",
    href: "/",
    icon: FaPaintBrush,
    current: false,
  },
  {
    name: "Socials",
    icon: UsersIcon,
    current: false,
    children: [
      {
        name: "Twitter",
        href: twitterUrl,
      },
      {
        name: "Telegram",
        href: telegramUrl,
      },
    ],
  },
];
