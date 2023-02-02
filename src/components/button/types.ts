import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


type RegularButton = {
  circular?: false
  children?: ReactNode,
}

type CircularButton = {
  circular?: true,
  children?: never,
}

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost',
  size?: 'small' | 'medium' | 'large',
  className?: string,
} & (RegularButton | CircularButton) & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;