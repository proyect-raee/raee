import clsx from 'clsx';
import { Input as RAInput } from 'react-aria-components';
import { IInput } from './input.interfaces';

export default function Input({ disabled, fullWidth, className, ...restProps }: IInput) {
  const inputClasses = clsx(
    'p-4 bg-white text-base text-slate-500 rounded-md font-regular shadow-lg shadow-slate-200 active:outline-none focus:outline-none focus-visible:outline-none',
    fullWidth && 'w-full',
    disabled && '!bg-slate-100 !text-slate-400',
    className,
  );

  return <RAInput className={inputClasses} disabled={disabled} {...restProps} />;
}
