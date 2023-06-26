import {
  BiPieChartAlt,
  BiBookmarks,
  FaBusinessTime,
  BiUserCircle,
  BiCog,
  BiLike,
  FiUsers,
  HiSave,
} from "../assets/icons/index";

// Side bar navigation

export const sideBarNavigation = [
  {
    name: "Dashboard",
    link: "/",
    icon: BiPieChartAlt,
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: BiBookmarks,
  },
  {
    name: "Schedules",
    link: "/schedules",
    icon: FaBusinessTime,
  },
  {
    name: "Users",
    link: "/users",
    icon: BiUserCircle,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: BiCog,
  },
];

// data exports

export const datas = [
  {
    title: "Total Revenues",
    value: "$2,129,430",
    background: "#DDEFE0",
    icon: HiSave,
  },
  {
    title: "Total Transactions",
    value: "1,520",
    background: "#F4ECDD",
    icon: BiBookmarks,
  },
  {
    title: "Total Likes",
    value: "9,721",
    background: "#EFDADA",
    icon: BiLike,
  },
  {
    title: "Total Users",
    value: "892",
    background: "#DEE0EF",
    icon: FiUsers,
  },
];
