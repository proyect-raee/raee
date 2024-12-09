import { ButtonProps } from 'react-aria-components';

type ButtonTypes = 'primary' | 'normal';

interface IButtonMain {
  fullWidth?: boolean;
  buttonType?: ButtonTypes;
  disabled?: boolean;
}

export type IButton = ButtonProps & IButtonMain;
