import React from 'react';
import classnames from 'classnames';
export const NesList: React.FC<{
  disc?: boolean;
  circle?: boolean;
  className?: string;
}> = ({ disc, circle, className, children }) => {
  return (
    <ul
      className={classnames('nes-list', className, {
        'is-disc': disc,
        'is-circle': circle
      })}
    >
      {children}
    </ul>
  );
};

export default NesList;
