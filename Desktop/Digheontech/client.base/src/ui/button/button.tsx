'use client';

import { clsx } from 'clsx';
import { Button as RAButton } from 'react-aria-components';
import { IButton } from './button.interfaces';

export default function Button({
  fullWidth,
  buttonType,
  children,
  className,
  disabled,
  onPress,
}: IButton) {
  const buttonClasses = clsx(
    'active:select-none whitespace-nowrap border border-primary-500 font-bold p-4 text-white bg-primary-500 hover:bg-primary-300 hover:border-primary-300 uppercase transition-all ease-out duration-200 tracking-wide text-base leading-6 rounded-md active:outline-none focus:outline-none focus-visible:outline-none',
    buttonType !== 'normal' && 'active:!bg-primary-700 active:!border-primary-700',
    buttonType === 'normal' &&
      'border-slate-500 !text-slate-500 bg-transparent hover:!bg-slate-100 hover:!border-slate-400 active:!bg-slate-300 active:!border-slate-300',
    fullWidth && 'w-full',
    disabled &&
      '!text-slate-400 !bg-slate-200 pointer-events-none !cursor-not-allowed hover:!bg-slate-200 !border-slate-200 hover:border-slate-200',
    className,
  );

  return (
    <RAButton className={buttonClasses} onPress={onPress} isDisabled={disabled}>
      {children}
    </RAButton>
  );
}
