import React, { useState, useCallback } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Flex } from '../../layout';
import DownloadLinkList from '../../components/DownloadLinkList';
import { useConst } from '../../utils/useConst';
import SVGGraph from '../../components/SVGGraph';
import './index.css';

const Result: React.FC<RouteComponentProps> = function() {
  return (
    <div className="tl mh3 code">
      <SingleResult />
      <section className="criteria">
        <div className="relative">
          <div className="inner overflow-x-auto">
            <table className="table-fixed">
              <thead>
                <tr>
                  <th className="tc">Criterias</th>
                  <th>SCALE</th>
                  <th>PFS</th>
                  <th>PFS'</th>
                  <th>FTA</th>
                  <th>VPSC</th>
                  <th>PRISM</th>
                  <th>GTREE</th>
                  <th>RWordle-L</th>
                  <th>Diamond</th>
                </tr>
              </thead>
              <tbody>
                <tr className="striped--near-white">
                  <th>Orthogonal ordering</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr className="striped--near-white">
                  <th>Orthogonal ordering</th>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

const SingleResult: React.FC = function() {
  return (
    <section>
      <h2 className="">bv100.gv</h2>
      <Flex className="flex-wrap ml6-l">
        <GraphMemo name="Initial" />
        <GraphMemo name="Scale" />
        <GraphMemo name="PFS" />
        <GraphMemo name="PFS'" />
        <GraphMemo name="FTA" />
        <GraphMemo name="VPSC" />
        <GraphMemo name="PRISM" />
        <GraphMemo name="GTREE" />
        <GraphMemo name="RWordle-L" />
        <GraphMemo name="Diamond" />
      </Flex>
    </section>
  );
};

const GraphContainer: React.FC<{ name: string | any }> = ({ name }) => {
  const graph = useConst(() => ({ nodes: [], edges: [] }));
  const [SVGContent, setSVGContent] = useState<string | null>(null);

  const svgRef = useCallback(svgRef => {
    if (svgRef) {
      const serializer = new XMLSerializer();
      setSVGContent(serializer.serializeToString(svgRef));
    }
  }, []);

  return (
    <div className="mh1 fixed-width" style={{ height: '150px' }}>
      <Flex column className="flex-wrap items-stretch">
        <h3>{name}</h3>
        <div className="graph mv1">
          <SVGGraph graph={graph} svgRef={svgRef} width={100} height={88} />
        </div>
        <DownloadLinkList
          name={name}
          json={'{ nodes: [], edges: [] }'}
          gml=""
          svg={SVGContent}
        />
      </Flex>
    </div>
  );
};
const GraphMemo = React.memo(GraphContainer);

export default Result;
