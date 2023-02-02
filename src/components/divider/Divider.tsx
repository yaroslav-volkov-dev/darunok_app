import clsx from 'clsx';

type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  margin?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
}

export const Divider = ({ orientation = 'horizontal', margin }: DividerProps) => {
  const computedClassNames = clsx(
    `mb-${margin}`, 'bg-black', 'shrink-0', orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px');

  return (
    <div className={computedClassNames} />
  );
};
