import clsx from 'clsx';

import { ICard } from './card.interfaces';

export default function Card({ children, className, bordered, transparent }: ICard) {
  const cardClasses = clsx(
    'bg-white border border-white rounded-2xl p-6',
    bordered && '!border-slate-200',
    transparent && '!bg-transparent',
    className,
  );

  return <div className={cardClasses}>{children}</div>;
}
