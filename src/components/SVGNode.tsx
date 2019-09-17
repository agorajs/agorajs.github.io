import React from 'react';
import { Node } from 'agora-graph';

import './SVGNode.css';

export const SVGNode: React.FC<{ node: Node }> = function({
  node: { x, y, height, width, index, label }
}) {
  let text = label || index;
  if (text === 'undefined') text = index;
  return (
    <g className="node" transform={`translate(${x},${y})`}>
      <rect
        className="rect"
        width={width}
        height={height}
        transform={`translate(${-width / 2},${-height / 2})`}
      />
      <text className="label" transform="translate(-5,6)">
        {label !== 'undefined' ? label || index : index}
      </text>
    </g>
  );
};

export default SVGNode;
