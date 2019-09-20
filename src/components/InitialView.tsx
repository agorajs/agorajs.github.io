import React from 'react';
import { AlgorithmView, AlgorithmViewType } from './AlgorithmView';

export type InitialViewType = AlgorithmViewType;

export const InitialView: React.FC<InitialViewType> = function({
  title,
  graph,
  gml,
  width,
  height,
  ...rest
}) {
  return (
    <AlgorithmView
      title={title}
      graph={graph}
      gml={gml}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default InitialView;
