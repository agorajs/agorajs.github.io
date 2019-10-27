import React from 'react';
import classnames from 'classnames';

type NesListProps = {
  disc?: boolean;
  circle?: boolean;
  className?: string;
};

export const NesList: React.FC<NesListProps> = ({
  disc,
  circle,
  className,
  children
}) => (
  <ul
    className={classnames('nes-list', className, {
      'is-disc': disc,
      'is-circle': circle
    })}
  >
    {children}
  </ul>
);
export default NesList;

export const NesListMemo: React.FC<NesListProps> = React.memo(NesList);
