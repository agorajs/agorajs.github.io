import React from 'react';
import classnames from 'classnames';

type NesContainerProps = {
  centered?: boolean;
  className?: string;
  rounded?: boolean;
  title?: any;
};

export const NesContainer: React.FC<NesContainerProps> = ({
  title,
  centered,
  rounded,
  className,
  children
}) => (
  <div
    className={classnames('nes-container', className, {
      'with-title': title,
      'is-centered': centered,
      'is-rounded': rounded
    })}
  >
    {title && <p className="title">{title}</p>}
    {children}
  </div>
);
export default NesContainer;

export const NesContainerMemo: React.FC<NesContainerProps> = React.memo(
  NesContainer
);
