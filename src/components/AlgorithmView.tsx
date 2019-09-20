import React, { useState, useCallback } from 'react';
import SVGGraph, { SVGGraphType } from './SVGGraph';
import { DownloadLinkList } from './DownloadLinkList';

export type AlgorithmViewType = {
  title: string;
  gml?: string;
  width?: number;
  height?: number;
} & Omit<SVGGraphType, 'svgRef' | 'width' | 'height'>;

export const AlgorithmView: React.FC<AlgorithmViewType> = function({
  title,
  graph,
  width: pWidth,
  height: pHeight,
  gml,
  className,
  ...rest
}) {
  const [SVGContent, setSVGContent] = useState<string | null>(null);
  const [width, setWidth] = useState(pWidth);
  const [height, setHeight] = useState(pHeight);
  const svgRef = useCallback(
    svgRef => {
      if (svgRef) {
        const serializer = new XMLSerializer();
        setSVGContent(serializer.serializeToString(svgRef));
      }
    },
    [graph]
  );
  const measuredRef = useCallback(
    node => {
      if (node !== null) {
        if (!pHeight) setHeight(node.getBoundingClientRect().height);
        if (!pWidth) setWidth(node.getBoundingClientRect().width);
      }
    },
    [pWidth, pHeight]
  );
  return (
    <div className={'graph ' + className}>
      <h2 className="title">{title}</h2>
      <DownloadLinkList
        name={title}
        json={JSON.stringify(graph)}
        gml={gml}
        svg={SVGContent}
      />
      <div className="graph w-100 h-100 ma1" ref={measuredRef}>
        {height && width ? (
          <SVGGraph
            graph={graph}
            width={width}
            height={height}
            svgRef={svgRef}
            {...rest}
          />
        ) : null}
      </div>
    </div>
  );
};
export default AlgorithmView;
