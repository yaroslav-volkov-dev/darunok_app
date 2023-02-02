import { NavLink } from 'react-router-dom';
import { Image } from '../../image';

type HolidayCardProps = {
  type: 'common' | 'private';
  name: string;
}

export const HolidayCard = ({ type, name }: HolidayCardProps) => {
  return (
    <div className="w-full h-20 bg-white shrink-0">
      <Image src="/src" />
      {type === 'private' &&
        <NavLink to="/wishlist">
          See ${name}'s wishlist
        </NavLink>
      }
    </div>
  );
};
