import React, { SVGProps } from 'react';
import _ from 'lodash';
import { max as d3max } from 'd3-array';
import { Graph, Node, Box } from 'agora-graph';
import EdgeComp from './SVGEdge';
import NodeComp from './SVGNode';

export type SVGGraphType = {
  graph: Graph;
  over?: boolean;
  width: number;
  height: number;
  svgRef?: any;
  thumbnail?: boolean;
} & SVGProps<SVGSVGElement>;

export const SVGGraph: React.FC<SVGGraphType> = function({
  graph,
  over = false,
  width,
  height,
  svgRef,
  thumbnail = true,
  ...rest
}) {
  const box = {
    width: d3max(graph.nodes, d => d.x + d.width / 2) || 0,
    height: d3max(graph.nodes, d => d.y + d.height / 2) || 0
  };

  const scaler = thumbnail
    ? createScale(box, { width, height })
    : (x: number) => x;

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
      width={thumbnail ? width : 1920}
      height={thumbnail ? height : 1080}
      viewBox={`-5,-5,${(thumbnail ? width : box.width) + 10},${(thumbnail
        ? height
        : box.height) + 10}`}
      {...rest}
      ref={svgRef}
    >
      <style>{`
      .edges { 
        stroke: #878fff;
        stroke-width: 2px;
      }

      .rect {
        stroke: #000;
        fill: #eee;
      }
      `}</style>
      {/* <g className="nodes">
        {nodes.map(n => (
          <NodeComp key={n.index} node={n}></NodeComp>
        ))}
      </g> */}
      {/* {over ? (
        <>
          <NodeList nodes={nodes} />
          <EdgeList edges={edges} />
        </>
      ) : (

      )} */}
      <EdgeList edges={edges} />
      <NodeList nodes={nodes} />
    </svg>
  );
};

export default SVGGraph;

const EdgeList: React.FC<{ edges: [Node, Node][] }> = function({ edges }) {
  return (
    <g className="edges">
      {edges.map(([source, target]) => (
        <EdgeComp
          // key={source.index + ':' + target.index}
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
