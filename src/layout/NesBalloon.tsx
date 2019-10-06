import React from 'react';
import classnames from 'classnames';

export const NesBalloon: React.FC<{
  right?: boolean;
  left?: boolean;
  className?: string;
}> = ({ right, left, children, className }) => (
  <div
    className={classnames('nes-balloon', className, {
      'from-right': right,
      'from-left': left
    })}
  >
    {children}
  </div>
);

export default NesBalloon;
