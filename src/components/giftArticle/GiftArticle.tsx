import { Asset } from 'types/commonTypes';
import { Image } from '../image';

type GiftArticleProps = {
  name: string;
  image: Asset;
}

export const GiftArticle = ({ name, image }: GiftArticleProps) => {
  return (
    <article className="w-full flex flex-col border border-grey bg-white rounded-t">
      <Image src={image.src} placeholderSrc={image.src} wrapperClassName="w-full h-52" className="rounded-t" />
      <div className="p-2 flex flex-col">
        <span>{name}</span>
        <span>price</span>
        <span>link</span>
      </div>
    </article>
  );
};

