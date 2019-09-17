import React, { SVGProps } from 'react';
import _ from 'lodash';
import { max as d3max } from 'd3-array';
import { Graph, Node, Box } from 'agora-graph';
import EdgeComp from './SVGEdge';
import NodeComp from './SVGNode';

export const SVGGraph: React.FC<
  {
    graph: Graph;
    over?: boolean;
    width: number;
    height: number;
  } & SVGProps<SVGSVGElement>
> = function({ graph, over = false, width, height, ...rest }) {
  const box = {
    width: d3max(graph.nodes, d => d.x + d.width / 2) || 0,
    height: d3max(graph.nodes, d => d.y + d.height / 2) || 0
  };

  const scaler = createScale(box, { width, height });

  const nodes = _(graph.nodes)
    .map(({ width, height, x, y, ...rest }) => ({
      ...rest,
      width: scaler(width),
      height: scaler(height),
      x: scaler(x),
      y: scaler(y)
    }))
    .sortBy('index')
    .value();

  const edges: [Node, Node][] = graph.edges.map<[Node, Node]>(
    ({ source, target }) => [
      _.find(nodes, { index: source }) as Node,
      _.find(nodes, { index: target }) as Node
    ]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`-5,-5,${width + 10},${height + 10}`}
      {...rest}
    >
      {over ? (
        <>
          <NodeList nodes={nodes} />
          <EdgeList edges={edges} />
        </>
      ) : (
        <>
          <EdgeList edges={edges} />
          <NodeList nodes={nodes} />
        </>
      )}
    </svg>
  );
};

export default SVGGraph;

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

/**
 *
 * @param initial
 * @param frame
 *
 * @returns function which converts the coordinate for the projection
 */
export function createScale(initial: Box, frame: Box): (ref: number) => number {
  const scale: any = function(initial: number) {
    return scale.ratio * initial;
  };

  scale.ratio = Math.min(
    frame.width / initial.width,
    frame.height / initial.height
  );

  return scale;
}
