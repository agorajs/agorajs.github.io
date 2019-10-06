import React from 'react';
import classnames from 'classnames';
export const Flex: React.FC<{
  parent?: string;
  auto?: boolean;
  column?: boolean;
  className?: string;
}> = ({ parent: Parent = 'div', auto, column, className, children }) => (
  // @ts-ignore
  <Parent
    className={classnames('flex', className, {
      'flex-auto': auto,
      'flex-column': column
    })}
  >
    {children}
  </Parent>
);

export default Flex;
