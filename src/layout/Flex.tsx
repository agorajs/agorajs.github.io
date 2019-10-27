import React from 'react';
import classnames from 'classnames';

type FlexProps = {
  parent?: string;
  auto?: boolean;
  column?: boolean;
  className?: string;
};

export const Flex: React.FC<FlexProps> = ({
  parent: Parent = 'div',
  auto,
  column,
  className,
  children
}) => (
  // @ts-ignore
  <Parent
    className={classnames(className, 'flex', {
      'flex-auto': auto,
      'flex-column': column
    })}
  >
    {children}
  </Parent>
);
export default Flex;

export const FlexMemo: React.FC<FlexProps> = React.memo(Flex);
