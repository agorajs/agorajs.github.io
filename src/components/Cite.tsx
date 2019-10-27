import React from 'react';
import { useSelector } from 'react-redux';
import { referencesToIndexMap } from '../store/selectors/references';
type CiteProps = {
  cite: string[];
};

export const Cite: React.FC<CiteProps> = ({ cite }) => {
  const references = useSelector(referencesToIndexMap);

  return (
    <>
      [
      {cite
        .map<React.ReactNode>(ref => (
          <a key={ref} href={'#ref:' + ref}>
            {references[ref].index}
          </a>
        ))
        .reduce((prev, curr) => [prev, ',', curr])}
      ]
    </>
  );
};
export default Cite;

export const CiteMemo: React.FC<CiteProps> = React.memo(Cite);
