import { ReactNode } from 'react';

export type Asset = {
  src: string,
  alt: string,
  title: string
}

export type FriendUpdate = {
  id: string,
  friendId: string,
  image: Asset,
  friendName: string,
}

export type WithChildren<T = {}> = { children: ReactNode } & T;