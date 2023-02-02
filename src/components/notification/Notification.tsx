import clsx from 'clsx';
import { Icon } from '../icon';
import styles from './Notification.module.css';

type NotificationProps = {
  title: string,
  description: string,
  type: string,
  onRemove: (removedId: string) => () => void;
  id: string,
  isAnimated: boolean;
}


export const Notification = ({ title, description, type, onRemove, id, isAnimated }: NotificationProps) => {
  return (
    <div
      className={clsx(
        isAnimated && styles.close,
        'w-full',
        'h-28',
        'flex',
        'justify-between',
        'bg-white',
        'mb-3',
        'rounded',
        'p-3')}>
      <div className="h-full">
        <div className="flex">
          <Icon name="celebration" className="mr-2" />
          <p>{title}</p>
        </div>
        <p>{description}</p>
      </div>
      <Icon name="close" className="cursor-pointer" size={36} role="button" onClick={onRemove(id)} />
    </div>
  );
};
