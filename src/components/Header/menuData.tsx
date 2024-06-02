import { Menu } from '@/types/menu'

const menuData: Menu[] = [
  {
    id: 1,
    title: 'About',
    path: '/about',
    newTab: false,
  },
  {
    id: 2,
    title: 'Photos',
    newTab: false,
    path: '/photos',
  },
  {
    id: 3,
    title: 'Videos',
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: 'T10 - Exclusive',
        path: '/videos/t10-exclusive',
        newTab: false,
      },
      {
        id: 3.2,
        title: 'Highlights',
        path: '/videos/highlights',
        newTab: false,
      },
      {
        id: 3.3,
        title: 'Magic Moments',
        path: '/videos/magic-moments',
        newTab: false,
      },
      {
        id: 3.4,
        title: 'Interviews',
        path: '/videos/interviews',
        newTab: false,
      },
      {
        id: 3.5,
        title: 'Press Conferences',
        path: '/videos/press-conferences',
        newTab: false,
      },
      {
        id: 3.6,
        title: 'All',
        path: '/videos/all',
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Matches',
    newTab: false,
    path: '/matches',
  },
  {
    id: 5,
    title: 'Teams',
    path: '/teams',
    newTab: false,
  },
  {
    id: 6,
    title: 'Contact Us',
    path: '/contact',
    newTab: false,
  },
  {
    id: 7,
    title: 'More',
    newTab: false,
    submenu: [
      {
        id: 7.1,
        title: 'Login',
        path: '/more/login',
        newTab: false,
      },
      {
        id: 7.2,
        title: 'Register',
        path: '/more/register',
        newTab: false,
      },
      {
        id: 7.3,
        title: 'News',
        path: '/more/news',
        newTab: false,
      },
      {
        id: 7.4,
        title: 'Venues',
        path: '/more/venues',
        newTab: false,
      },

      {
        id: 7.5,
        title: 'Points Table',
        path: '/points-table',
        newTab: false,
      },
    ],
  },
]

export default menuData
