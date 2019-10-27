import React from 'react';
import { ReferenceType } from '../../store/types';

export const Reference: React.FC<ReferenceType & { number: number }> = ({
  id,
  number,
  authors,
  title,
  additional,
  hasIn,
  journal,
  children
}) => (
  <p id={'ref:' + id} className="code">
    <span>[{number}]</span> {authors}.{' '}
    <span className="nes-text is-primary">{title}</span>.{hasIn && 'In '}
    <i>{journal}</i>
    {additional && ' ' + additional}.{children}
  </p>
);
export default Reference;

export const ReferenceMemo: React.FC<
  ReferenceType & { number: number }
> = React.memo(Reference);
