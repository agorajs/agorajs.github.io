import React from 'react';
import { Node } from 'agora-graph';

import './NodeComp.css';

export const NodeComp: React.FC<{ node: Node }> = function({
  node: { x, y, height, width, index, label }
}) {
  return (
    <g className="node" transform={`translate(${x},${y})`}>
      <rect
        className="rect"
        width={width}
        height={height}
        transform={`translate(${-width / 2},${-height / 2})`}
      />
      <text className="label" transform="translate(-5,6)">
        {label || index}
      </text>
    </g>
  );
};

export default NodeComp;
