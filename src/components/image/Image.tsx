import clsx from 'clsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type ImageProps = {
  src: string,
  placeholderSrc?: string,
  className?: string,
  wrapperClassName?: string,
}

export const Image = ({ src, placeholderSrc, className, wrapperClassName }: ImageProps) => {
  return (
    <LazyLoadImage
      className={clsx('object-cover w-full h-full', className)}
      src={src}
      placeholderSrc={placeholderSrc || src}
      wrapperClassName={wrapperClassName}
    />
  );
};
