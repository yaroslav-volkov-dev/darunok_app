import { GiftArticle } from 'components/giftArticle';
import { FriendsUpdates } from '../../components';

const mockCards = [
  {
    name: 'name',
    image: {
      src: 'https://t4.ftcdn.net/jpg/02/32/59/37/360_F_232593760_OxjRGgEozAzdPQZ7zxCXFHbU3jgBl0Lz.jpg',
      alt: 'alt',
      title: 'string',
    },
    id: '1',
  }, {
    name: 'name',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Moka2.jpg',
      alt: 'alt',
      title: 'string',
    },
    id: '2',
  }, {
    name: 'name',
    image: {
      src: 'https://kor.ill.in.ua/m/610x385/2722809.jpg',
      alt: 'alt',
      title: 'string'
    },
    id: '3',
  }, {
    name: 'name',
    image: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Patron_in_Ohmatdyt%2C_28_April_2022_%2804%29.jpg/800px-Patron_in_Ohmatdyt%2C_28_April_2022_%2804%29.jpg',
      alt: 'alt',
      title: 'string'
    },
    id: '4'
  }, {
    name: 'name',
    image: {
      src: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/5158/production/_128142802_budanov.png',
      alt: 'alt',
      title: 'string'
    },
    id: '5',
  }, {
    name: 'name',
    image: {
      src: 'https://www.5.ua/media/pictures/original/245915.jpg?t=1648735651',
      alt: 'alt',
      title: 'string'
    },
    id: '6'
  }, {
    name: 'name',
    image: {
      src: 'https://t4.ftcdn.net/jpg/02/32/59/37/360_F_232593760_OxjRGgEozAzdPQZ7zxCXFHbU3jgBl0Lz.jpg',
      alt: 'alt',
      title: 'string'
    },
    id: '7'
  },];

export const WishesPage = () => {
  return (
    <div className="grid grid-cols-2 gap-5 grow-0">
      {mockCards.map(({ name, image, id }) => {
        return <GiftArticle name={name} image={image} key={id} />;
      })}
    </div>
  );
};