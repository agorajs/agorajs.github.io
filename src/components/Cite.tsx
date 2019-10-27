import React from 'react';
type CiteProps = {
  cite: string;
  value: number;
};

export const Cite: React.FC<CiteProps> = ({ cite, value }) => (
  <a href={'#ref:' + cite}>[{value}]</a>
);
export default Cite;

export const CiteMemo: React.FC<CiteProps> = React.memo(Cite);
