import React, { useState, useCallback } from 'react';
import { Flex } from '../../layout';
import DownloadLinkList from '../../components/DownloadLinkList';
import SVGGraph, { ThumbnailSVGGraph } from '../../components/SVGGraph';
import { Graph } from 'agora-graph';

const GraphContainer: React.FC<{
  name: string | any;
  graph: Graph;
  gml?: string;
}> = ({ name, graph, gml }) => {
  const [SVGContent, setSVGContent] = useState<string | null>(null);
  const svgRef = useCallback(svgRef => {
    if (svgRef) {
      const serializer = new XMLSerializer();
      setSVGContent(serializer.serializeToString(svgRef));
    }
  }, []);

  return (
    <div className="mh1 fixed-width" style={{ height: '150px' }}>
      <Flex column wrap className="items-stretch">
        <h3 className="nowrap">{name}</h3>
        <DownloadLinkList
          name={name}
          json={JSON.stringify(graph)}
          gml={gml}
          svg={SVGContent}
        />
        <div className="graph mt1">
          <ThumbnailSVGGraph graph={graph} width={90} height={88} />
          <div className="dn">
            <SVGGraph graph={graph} svgRef={svgRef} />
          </div>
        </div>
      </Flex>
    </div>
  );
};
export const GraphMemo = React.memo(GraphContainer);
export default GraphMemo;
