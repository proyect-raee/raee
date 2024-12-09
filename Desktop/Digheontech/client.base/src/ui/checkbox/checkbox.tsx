import { Checkbox as RACheckbox } from 'react-aria-components';
import { ICheckbox } from './checkbox.interfaces';
import { MdCheck } from 'react-icons/md';
import clsx from 'clsx';

export default function Checkbox({ children, onChange, disabled, className }: ICheckbox) {
  const raCheckboxClasses = clsx(
    'group flex items-center gap-2 leading-none',
    disabled && 'pointer-events-none !text-slate-400',
    className,
  );

  const checkboxClasses = clsx(
    'h-4 w-4 checkbox w-5 h-5 rounded border-2 border-slate-500 flex justify-center items-center transition-all duration-200 group-selected:bg-primary-500 group-selected:border-primary-500',
    disabled && '!border-slate-400 group-selected:!bg-slate-400 group-selected:!border-slate-400',
  );

  return (
    <RACheckbox className={raCheckboxClasses} onChange={onChange} isDisabled={disabled}>
      <div className={checkboxClasses}>
        <MdCheck className="h-4 w-4 fill-none stroke-transparent transition-all duration-200 group-selected:fill-white stroke-2" />
      </div>
      {children}
    </RACheckbox>
  );
}
