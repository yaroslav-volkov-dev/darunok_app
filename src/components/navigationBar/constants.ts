import { IconNames } from '../icon';

type MenuLink = {
  name: string,
  link: string,
  iconName: IconNames,
}

export const menuLinks: MenuLink[] = [
  {
    name: 'Wishlist',
    link: '/',
    iconName: 'favorite'
  },
  {
    name: 'Messages',
    link: '/messages',
    iconName: 'message'
  },
  {
    name: 'Profile',
    link: '/profile',
    iconName: 'account_circle'
  },
  {
    name: 'Notifications',
    link: '/notifications',
    iconName: 'notification_important'
  },
  {
    name: 'About project',
    link: '/about',
    iconName: 'info'
  },
];