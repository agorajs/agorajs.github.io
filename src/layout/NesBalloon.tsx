import React from 'react';
import classnames from 'classnames';

type NesBalloonProps = {
  right?: boolean;
  left?: boolean;
  className?: string;
};

export const NesBalloon: React.FC<NesBalloonProps> = ({
  right,
  left,
  children,
  className
}) => (
  <div
    className={classnames(className, 'nes-balloon', {
      'from-right': right,
      'from-left': left
    })}
  >
    {children}
  </div>
);
export default NesBalloon;

export const NesBalloonMemo: React.FC<NesBalloonProps> = React.memo(NesBalloon);
