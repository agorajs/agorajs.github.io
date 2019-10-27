import React from 'react';
import classnames from 'classnames';

type NesButtonProps = {
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
  onClick?: (event: any) => void;
};

export const NesButton: React.FC<NesButtonProps> = ({
  primary,
  success,
  warning,
  error,
  disabled,
  children,
  onClick
}) => (
  <button
    type="button"
    className={classnames('nes-btn', {
      'is-primary': primary,
      'is-success': success,
      'is-warning': warning,
      'is-error': error,
      'is-disabled': disabled
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
export default NesButton;

export const NesButtonMemo: React.FC<NesButtonProps> = React.memo(NesButton);
