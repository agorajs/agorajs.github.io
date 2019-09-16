import React from 'react';
import _ from 'lodash';

import { Graph, Node } from 'agora-graph';
import EdgeComp from './EdgeComp';
import NodeComp from './NodeComp';

export const GraphComp: React.FC<
  {
    graph: Graph;
    over?: boolean;
  } & SVGSVGElement
> = function({ graph, over = false, ...rest }) {
  const edges: [Node, Node][] = graph.edges.map<[Node, Node]>(
    ({ source, target }) => [
      _.find(graph.nodes, { index: source }) as Node, // yeah i know :(
      _.find(graph.nodes, { index: target }) as Node
    ]
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...rest}>
      {over ? (
        <>
          <NodeList nodes={graph.nodes} />
          <EdgeList edges={edges} />
        </>
      ) : (
        <>
          <EdgeList edges={edges} />
          <NodeList nodes={graph.nodes} />
        </>
      )}
    </svg>
  );
};

export default GraphComp;

const EdgeList: React.FC<{ edges: [Node, Node][] }> = function({ edges }) {
  return (
    <g className="edges">
      {edges.map(([source, target]) => (
        <EdgeComp
          key={source.index + ':' + target.index}
          source={source}
          target={target}
        />
      ))}
    </g>
  );
};

const NodeList: React.FC<{ nodes: Node[] }> = function({ nodes }) {
  return (
    <g className="nodes">
      {nodes.map(n => (
        <NodeComp key={n.index} node={n}></NodeComp>
      ))}
    </g>
  );
};
