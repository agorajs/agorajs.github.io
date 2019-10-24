import React from 'react';
import classnames from 'classnames';

export const NesButton: React.FC<{
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
  onClick?: () => any;
}> = React.memo(
  ({ primary, success, warning, error, disabled, children, onClick }) => (
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
  )
);

export default NesButton;
