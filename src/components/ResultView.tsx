import React, { SVGProps, useRef, useEffect, useState } from 'react';
import { crop, Graph, Algorithm } from 'agora-graph';
import { AlgorithmView, AlgorithmViewType } from './AlgorithmView';

export type ResultType = {
  algorithm: Algorithm<any>;
  initial: Graph;
} & Omit<AlgorithmViewType, 'title' | 'graph'>;

export const ResultView: React.FC<ResultType> = function({
  algorithm: { name, algorithm },
  initial,
  width,
  height,
  ...rest
}) {
  const [graph, setGraph] = useState<Graph | null>(null);

  // calling async set
  useEffect(() => {
    const copy = {
      nodes: initial.nodes.map(n => ({ ...n })),
      edges: initial.edges.map(e => ({ ...e }))
    };
    setGraph(crop(algorithm(copy).graph));
  }, [algorithm, initial]);

  return graph ? (
    <AlgorithmView
      title={name}
      graph={graph}
      height={height}
      width={width}
      {...rest}
    />
  ) : (
    <p>Loading</p>
  );
};

export default ResultView;
