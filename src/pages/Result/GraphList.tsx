import _ from 'lodash';
import React from 'react';
import { Flex } from '../../layout';
import { GraphMemo } from './GraphContainer';
import { GraphProps, GraphResultProps } from './index';

export const GraphList: React.FC<{
  initial: GraphProps;
  current: GraphResultProps[] | { [k: string]: GraphResultProps };
}> = ({ initial, current }) => (
  <article>
    <Flex wrap className="justify-center justify-start-ml">
      <div className="ml128-ml">
        {initial && (
          <GraphMemo name="Initial" graph={initial.graph} gml={initial.gml} />
        )}
      </div>
      {current &&
        _.map(current, ({ id, name, graph, gml }) => (
          <GraphMemo key={id} name={name} graph={graph} gml={gml} />
        ))}
    </Flex>
  </article>
);

export const GraphListMemo = React.memo(GraphList);
export default GraphListMemo;
