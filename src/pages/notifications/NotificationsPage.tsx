import { Notification } from 'components';
import { useState } from 'react';

const mockedNotification: Notifications[] = [
  {
    title: 'title1',
    description: 'description',
    type: 'type',
    id: '1',
  }, {
    title: 'asdfasdfasdfasdf',
    description: 'description',
    type: 'type',
    id: '2',
  }, {
    title: 'asdd',
    description: 'description',
    type: 'type',
    id: '3',
  }, {
    title: 'tasdfasdfasdfasdfasdfasdfitle',
    description: 'description',
    type: 'type',
    id: '4',
  }, {
    title: 'tiaatle',
    description: 'description',
    type: 'type',
    id: '5'
  },];

type Notifications = {
  title: string,
  description: string,
  type: string,
  id: string
}

export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notifications[]>(mockedNotification);
  const [animatedItemId, setAnimatedItemId] = useState<string | null>(null);


  const removeNotification = (removedId: string) => async () => {
    setAnimatedItemId(removedId);
    await new Promise(resolve => setTimeout(resolve, 500));
    setNotifications((prev) => prev.filter(({ id }) => id !== removedId));
    setAnimatedItemId('');
  };

  return (
    <div>
      {notifications.map(({ description, title, id }) => (
        <Notification
          isAnimated={animatedItemId === id}
          title={title}
          description={description}
          type="type"
          key={id}
          id={id}
          onRemove={removeNotification}
        />)
      )}
    </div>
  );
};
