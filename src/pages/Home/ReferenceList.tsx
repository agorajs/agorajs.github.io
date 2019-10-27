import React from 'react';
import { Reference } from './Reference';
import { useSelector } from 'react-redux';
import { getReferences } from '../../store/selectors/references';
export const ReferenceList: React.FC<{
  className?: string;
}> = ({ className }) => {
  const references = useSelector(getReferences);
  return (
    <section id="references" className={className}>
      <h3>References</h3>
      <div className="tl">
        {references.map((r, index) => (
          <Reference key={r.id} {...r} number={index + 1} />
        ))}
      </div>
    </section>
  );
};
export default ReferenceList;

export const ReferenceListMemo: React.FC<{
  className?: string;
}> = React.memo(ReferenceList);
