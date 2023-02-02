import clsx from 'clsx';
import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction, useCallback } from 'react';

type InputProps = {
  value?: string,
  setValue?: Dispatch<SetStateAction<string>>,
  label?: string,
  labelClassName?: string,
  className?: string,
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = ({ className, value, setValue, label, labelClassName, ...props }: InputProps) => {
  // const inputOnChange = useCallback(() => (value: string) => {
  //   setValue(value);
  // }, [setValue]);

  return (
    <label className={labelClassName}>
      {label && <p className="mb-2">{label}</p>}
      <input type="text" value={value}  {...props} className={clsx(className, 'w-full h-9 px-3 rounded')} />
    </label>
  );
};
