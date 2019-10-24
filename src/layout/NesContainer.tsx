import React from 'react';
import classnames from 'classnames';

export const NesContainer: React.FC<{
  title?: any;
  centered?: boolean;
  className?: string;
  rounded?: boolean;
}> = React.memo(({ title, centered, rounded, className, children }) => (
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
));

export default NesContainer;
