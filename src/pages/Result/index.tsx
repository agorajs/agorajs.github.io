import { Redirect, RouteComponentProps } from '@reach/router';
import { toGraph } from 'agora-gml';
import { crop } from 'agora-graph';
import _ from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  filteredAlgorithms,
  filteredCriterias,
  getFinalFiles
} from '../../store/selectors';
import { useAlgorithms } from './hooks/useAlgorithms';
import { useCounter } from './hooks/useCounter';
import { useCriteria } from './hooks/useCriteria';
import { useDisplayable } from './hooks/useDisplayable';

import './index.css';
import SingleResult from './SingleResult';
import { isIE } from './isIE';

export const Result: React.FC<RouteComponentProps> = function() {
  const finalFiles = useSelector(getFinalFiles);
  const selectedAlgs = useSelector(filteredAlgorithms);
  const selectedCri = useSelector(filteredCriterias);

  // loading algorithms
  const algorithms = useAlgorithms(selectedAlgs);

  // finished loading algs, loading criteria
  const criteria = useCriteria(selectedCri);

  // displaying more and more :)
  const [displayable, addDisplayable] = useDisplayable();

  const [fileCounter, incrementFileCounter] = useCounter(-1);

  // criterias and algorithms have been loaded
  useEffect(() => {
    if (algorithms && criteria) {
      incrementFileCounter();
    }
  }, [algorithms, criteria, incrementFileCounter]);

  // big loop
  useEffect(() => {
    // ignoring init :)
    if (fileCounter > -1) {
      if (fileCounter !== finalFiles.length) {
        const file = finalFiles[fileCounter];
        const graph = crop(toGraph(file.data));

        addDisplayable({ file, initial: { graph, gml: file.data } });
      } else {
        if (!isIE) for (const alg of algorithms!) alg.worker!.terminate();
        // wipe workers
      }
    }

    // eslint-disable-next-line
  }, [fileCounter]);

  const styled = useMemo(() => {
    let maxWidth = 128 + 98; // initial graph alignment
    // each algorithm
    maxWidth += 98 * (algorithms ? algorithms.length : 0);
    return (
      <style scoped>
        {`
/* browser sidebar correction */
@media (min-width: ${maxWidth + 30}px) {
.justify-start-ml{
  justify-content: start;
}
.mw8-ml {
max-width: ${maxWidth}px;
}

.tbth-min-w236-ml tbody th {
min-width: 226px;
}

.ttdh-w108-ml td,
.ttdh-w108-ml th {
width: 98px;
}

.ml128-ml {
margin-left: 128px;
}

.table-fixed-ml {
table-layout: fixed;
width: auto;
}
}`}
      </style>
    );
  }, [algorithms]);

  if (finalFiles.length === 0) {
    return <Redirect from="" to="/" noThrow />;
  }

  return (
    <>
      {styled}
      <div className="mw8-ml center tl mh3 code">
        {_.map(displayable, ({ file: { id, name }, initial }) => (
          <SingleResult
            key={id}
            name={name}
            initial={initial}
            algorithms={algorithms!}
            criteria={criteria!}
            nextFile={incrementFileCounter}
          />
        ))}
      </div>
    </>
  );
};

export default Result;
