import { FriendUpdate } from 'types/commonTypes';
import { FriendsUpdates } from '../friendsUpdates';
import { Image } from '../image';
import avatar from '../../assets/photo_2022-10-17_22-34-36.jpg';
import { UpcomingHolidays } from '../upcomingHoildays';

const mockUpdates: FriendUpdate[] = [
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '2',
    friendId: 'Friend2',
    friendName: 'Some name',
    image: {
      src: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
      title: 'title',
      alt: 'alt',
    },
  },
  {
    id: '3',
    friendId: 'Friend3',
    friendName: 'Some name',
    image: {
      src: 'https://apteka.net.ua/sites/default/files/styles/1920x1080m/public/product_images/f734c78ab0f73d16f022a3c6c2156f7d.png?itok=6BDm5CEQ',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
  {
    id: '1',
    friendId: 'Friend1',
    friendName: 'Some name',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsVtCjXrPFdX2KjGJLOrjRqL6TpKt4SEiys7cOsl_TPD3Z5Ee3k0yAMkFt7Dl1ibDFHI&usqp=CAU',
      title: 'title',
      alt: 'alt'
    },
  },
];

export const Sidebar = () => {
  return (
    <div className="px-3 py-7 overflow-hidden h-screen flex flex-col">
      <div className="flex items-center mb-4 bg-light-blue p-4 rounded">
        <Image
          className="rounded-full bg-black mr-3"
          wrapperClassName="w-16 h-16"
          src={avatar}
        />
        <div>
          <p className="mb-1">NickName</p>
          <p>Name</p>
        </div>
      </div>

      <FriendsUpdates.Wrapper>
        {mockUpdates.map(({ friendName, image, id }) => (
          <FriendsUpdates.Item friendName={friendName} image={image} key={id} />
        ))}
      </FriendsUpdates.Wrapper>
      <UpcomingHolidays />
    </div>
  );
};
