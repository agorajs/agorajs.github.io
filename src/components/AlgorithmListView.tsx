import React from 'react';
import PFS from 'agora-pfs';
import PFSP from 'agora-pfsp';
import FTA from 'agora-fta';
import VPSC from 'agora-vpsc';
import { RWordleLAlgorithm as RWordleL } from 'agora-rworldle';
import Scaling from 'agora-scaling';
import ResultView from './ResultView';
import { Graph } from 'agora-graph';

export const AlgorithmListView: React.FC<{
  initial: Graph;
  over?: boolean;
}> = function(props) {
  return (
    <>
      <ResultView
        algorithm={Scaling}
        {...props}
        className="w-25"
        height={300}
      />
      <ResultView algorithm={PFS} {...props} className="w-25" height={300} />
      <ResultView algorithm={PFSP} {...props} className="w-25" height={300} />
      <ResultView algorithm={FTA} {...props} className="w-25" height={300} />
      <ResultView
        algorithm={RWordleL}
        {...props}
        className="w-25"
        height={300}
      />
      <ResultView algorithm={VPSC} {...props} className="w-25" height={300} />
    </>
  );
};
export default AlgorithmListView;
