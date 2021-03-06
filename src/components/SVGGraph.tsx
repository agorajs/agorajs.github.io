import React, { SVGProps } from 'react';
import _ from 'lodash';
import { max as d3max } from 'd3-array';
import { Graph, Node, Box } from 'agora-graph';
import EdgeComp from './SVGEdge';
import NodeComp from './SVGNode';

export type ThumbnailSVGGraphType = {
  graph: Graph;
  over?: boolean;
  width: number;
  height: number;
} & SVGProps<SVGSVGElement>;

export type SVGGraphType = {
  graph: Graph;
  over?: boolean;
  svgRef?: any;
} & SVGProps<SVGSVGElement>;

export const SVGGraph: React.FC<SVGGraphType> = function({
  graph,
  over = false,
  svgRef,
  ...rest
}) {
  const box = {
    width: d3max(graph.nodes, d => d.x + d.width / 2) || 0,
    height: d3max(graph.nodes, d => d.y + d.height / 2) || 0
  };

  const nodes = _(graph.nodes)
    .map<Node>(node => ({ ...node }))
    .sortBy('index')
    .value();

  const edges: [string, Node, Node][] = graph.edges.map<[string, Node, Node]>(
    ({ source, target }) => [
      source + ':' + target,
      _.find(nodes, { index: source })!,
      _.find(nodes, { index: target })!
    ]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={box.width}
      height={box.height}
      viewBox={`-5,-5,${box.width + 10},${box.height + 10}`}
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
      <EdgeList edges={edges} />
      <NodeList nodes={nodes} />
    </svg>
  );
};

export const ThumbnailSVGGraph: React.FC<ThumbnailSVGGraphType> = function({
  graph,
  over = false,
  width,
  height,
  ...rest
}) {
  const box = {
    width: d3max(graph.nodes, d => d.x + d.width / 2) || 0,
    height: d3max(graph.nodes, d => d.y + d.height / 2) || 0
  };

  const scaler = createScale(box, { width: width!, height: height! });

  const nodes = _(graph.nodes)
    .map<Node>(({ width, height, x, y, ...rest }) => ({
      ...rest,
      width: scaler(width),
      height: scaler(height),
      x: scaler(x),
      y: scaler(y)
    }))
    .sortBy('index')
    .value();

  const edges: [string, Node, Node][] = graph.edges.map<[string, Node, Node]>(
    ({ source, target }) => [
      source + ':' + target,
      _.find(nodes, { index: source })!,
      _.find(nodes, { index: target })!
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

const EdgeList: React.FC<{ edges: [string, Node, Node][] }> = function({
  edges
}) {
  return (
    <g className="edges">
      {edges.map(([key, source, target]) => (
        <EdgeComp key={key} source={source} target={target} />
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
