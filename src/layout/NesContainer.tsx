import React from 'react';
import classnames from 'classnames';

export const NesContainer: React.FC<{
  title?: any;
  centered?: boolean;
  className?: string;
}> = React.memo(({ title, centered, className, children }) => (
  <div
    className={classnames('nes-container', className, {
      'with-title': title,
      'is-centered': centered
    })}
  >
    {title && <p className="title">{title}</p>}
    {children}
  </div>
));

export default NesContainer;
