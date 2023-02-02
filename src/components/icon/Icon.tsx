import clsx from 'clsx';
import { AriaRole } from 'react';

export type IconNames =
  'home'
  | 'favorite'
  | 'message'
  | 'account_circle'
  | 'celebration'
  | 'info'
  | 'close'
  | 'notification_important'
  | 'chevron_left'
  | 'chevron_right'

type IconSizes = 12 | 24 | 36 | 48

type IconProps = {
  name: IconNames,
  size?: IconSizes
  className?: string,
  role?: Extract<AriaRole, 'presentation' | 'button'>,
  onClick?: () => void,
}

export const Icon = ({ name, className, size = 24, role = 'presentation', onClick }: IconProps) => {
  return (
    <span
      role={role}
      className={clsx('material-symbols-outlined', className)}
      style={{ 'fontSize': `${size}px` }}
      onClick={onClick}
    >
      {name}
    </span>
  );
};

