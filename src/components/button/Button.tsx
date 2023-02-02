import clsx from 'clsx';
import { useMemo } from 'react';
import type { ButtonProps } from './types';


export const Button = (
  {
    variant = 'primary',
    size = 'medium',
    circular = false,
    children,
    className,
    ...props
  }: ButtonProps) => {
  const buttonClassNames = useMemo(() => clsx(
    className,
    circular
      ?
      ['rounded-full',
        {
          'w-20 h-20': size === 'large',
          'w-16 h-16': size === 'medium',
          'w-8 h-8': size === 'small',
        }
      ]
      :
      ['rounded', {
        'w-38 h-16': size === 'large',
        'w-32 h-12': size === 'medium',
        'w-18 h-6': size === 'small',
      }],
    {
      'bg-blue text-white': variant === 'primary',
      'bg-btn-secondary text-white': variant === 'secondary',
      'bg-transparent border-2 text-blue': variant === 'ghost',
    }), [circular, className, size, variant]);

  return (
    <button className={buttonClassNames} {...props}>
      {children}
    </button>
  );
};

