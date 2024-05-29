import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Matches",
    path: "/matches",
    newTab: false,
  },
  {
    id: 2,
    title: "Videos",
    newTab: false,
    submenu: [
      {
        id: 2.1,
        title: "T10 - Exculsive",
        path: "/videos/t10-exclusive",
        newTab: false,
      },
      {
        id: 2.2,
        title: "Highlights",
        path: "/videos/highlights",
        newTab: false,
      },
      {
        id: 2.3,
        title: "Magic Moments",
        path: "/videos/magic-moments",
        newTab: false,
      },
      {
        id: 2.4,
        title: "Invetviews",
        path: "/videos/interviews",
        newTab: false,
      },
      {
        id: 2.5,
        title: "Press Conferences",
        path: "/videos/press-conferences",
        newTab: false,
      },
      {
        id: 2.6,
        title: "All",
        path: "/videos/all",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Stats",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Overall Stats",
        path: "/stats/overall-stats",
        newTab: false,
      },
      {
        id: 3.1,
        title: "Head to Head",
        path: "/stats/head-to-head",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Points Table",
    path: "/points-table",
    newTab: false,
  },
  {
    id: 5,
    title: "News",
    newTab: false,
    submenu: [
      {
        id: 5.1,
        title: "All News",
        path: "/news/all-news",
        newTab: false,
      },
      {
        id: 5.2,
        title: "Announcements",
        path: "/news/announcements",
        newTab: false,
      },
      {
        id: 5.3,
        title: "Match Reports",
        path: "/news/match-reports",
        newTab: false,
      },
    ]
  },
  {
    id: 6,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 6.1,
        title: "About",
        path: "/more/about",
        newTab: false,
      },
      {
        id: 6.2,
        title: "Photos",
        path: "/more/photos",
        newTab: false,
      },
      {
        id: 6.3,
        title: "Venues",
        path: "/more/venues",
        newTab: false,
      },
      {
        id: 6.4,
        title: "Teams",
        path: "/more/teams",
        newTab: false,
      },
    ]
  },

]


export default menuData;
