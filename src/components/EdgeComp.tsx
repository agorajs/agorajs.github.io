import React from 'react';
import { Node } from 'agora-graph';

import './EdgeComp.css';

export const EdgeComp: React.FC<{ source: Node; target: Node }> = function({
  source,
  target
}) {
  return (
    <line
      className="link"
      x1={source.x}
      y1={source.y}
      x2={target.x}
      y2={target.y}
    />
  );
};

export default EdgeComp;
