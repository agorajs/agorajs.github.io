import React from 'react';
import classnames from 'classnames';

export const NesList: React.FC<{
  disc?: boolean;
  circle?: boolean;
  className?: string;
}> = React.memo(({ disc, circle, className, children }) => (
  <ul
    className={classnames('nes-list', className, {
      'is-disc': disc,
      'is-circle': circle
    })}
  >
    {children}
  </ul>
));

export default NesList;
