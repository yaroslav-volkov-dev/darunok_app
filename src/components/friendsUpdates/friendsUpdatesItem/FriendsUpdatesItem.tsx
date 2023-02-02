import { Asset, FriendUpdate } from 'types/commonTypes';
import { Image } from '../../image';

type FriendsUpdatesItemProps = Pick<FriendUpdate, 'friendName' | 'image'>;


export const FriendsUpdatesItem = ({ friendName, image }: FriendsUpdatesItemProps) => {
  return (
    <div className="flex items-center flex-col w-full cursor-pointer">
      <Image wrapperClassName="w-24 h-24" className="rounded-full" src={image?.src} placeholderSrc={image?.src} />
      <p className="caption">{friendName}</p>
    </div>
  );
};
