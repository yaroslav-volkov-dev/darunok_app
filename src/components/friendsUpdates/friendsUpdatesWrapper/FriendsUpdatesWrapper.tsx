import clsx from 'clsx';
import { WithChildren } from 'types/commonTypes';

export const FriendsUpdatesWrapper = ({ children }: WithChildren) => {
  return (
    <div className="shrink-0">
      <h5 className="mb-2">Friends updates:</h5>
      <div
        className={clsx(
          'w-full',
          'bg-light-blue',
          'rounded mb-5',
          'flex',
          'gap-6',
          'p-2',
          'overflow-x-auto',
          'justify-items-center',
          'styled-scrollbar'
        )}>
        {children}
      </div>
    </div>
  );
};
