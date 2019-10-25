import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Flex } from '../../layout';

const Result: React.FC<RouteComponentProps> = function() {
  return (
    <div>
      <SingleResult />
    </div>
  );
};

const SingleResult: React.FC = function() {
  return (
    <section>
      <h2 className="tl">bv100.gv</h2>
      <Flex>
        <GraphMemo name="Initial" />
        <GraphMemo name="PFS" />
        <GraphMemo name="PFS'" />
        <GraphMemo name="FTA" />
        <GraphMemo name="VPSC" />
        <GraphMemo name="PRISM" />
        <GraphMemo name="GTREE" />
        <GraphMemo name="RWordle-L" />
        <GraphMemo name="Diamond" />
      </Flex>
    </section>
  );
};

const GraphContainer: React.FC<{ name: string }> = ({ name }) => (
  <div className="w5 h5">{name}</div>
);
const GraphMemo = React.memo(GraphContainer);

export default Result;
