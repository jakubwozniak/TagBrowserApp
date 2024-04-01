import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import { NavItemInterface } from "./navList.types";

export const navItems: NavItemInterface[] = [
  {
    id: 0,
    name: "Home",
    icon: HomeIcon,
    link: "/",
  },
  {
    id: 1,
    name: "Tag List",
    icon: ListIcon,
    link: "/tagList",
  },
];
