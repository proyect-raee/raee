import { CheckboxProps } from 'react-aria-components';

export interface MainCheckbox {
  children?: React.ReactNode;
  disabled?: boolean;
}

export type ICheckbox = CheckboxProps & MainCheckbox;
