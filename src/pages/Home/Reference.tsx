import React from 'react';

export const Reference: React.FC<{
  id: string;
  number: number;
  authors: string;
  title: string;
}> = React.memo(({ id, number, authors, title, children }) => {
  return (
    <p id={'ref:' + id} className="code">
      <span>[{number}]</span> {authors}{' '}
      <span className="nes-text is-primary">{title}</span> {children}
    </p>
  );
});
