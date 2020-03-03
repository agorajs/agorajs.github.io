import {
  Graph,
  round,
  crop,
  Result,
  overlap,
  getAllOverlaps,
  overlapX,
  overlapY
} from 'agora-graph';
import _ from 'lodash';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

import GraphList from './GraphList';
import { useCounter } from './hooks/useCounter';
import { toGML } from 'agora-gml';
import { isIE } from './isIE';
import { LoadedAlg } from './hooks/useAlgorithms';

export type GraphProps = {
  graph: Graph;
  gml?: string;
};
export type CriType = {
  id: string;
  name: string;
  group: string;
  criterion: (
    initial: Graph,
    updated: Graph
  ) => {
    value: number;
  };
};

export type GraphResultProps = GraphProps & {
  name: string;
  id: string;
};

type SingleResultProps = {
  name: string;
  initial: { graph: Graph; gml?: string };
  algorithms: LoadedAlg[];
  criteria: CriType[];
  nextFile: () => void;
};

type GridCriteriaAlgorithm = {
  [k: string]: { [k: string]: number };
};

const useCurrentAlgorithm = function(
  algorithms: LoadedAlg[]
): [LoadedAlg, number, () => void] {
  const [counter, increment] = useCounter(0);

  const currentAlgorithm = useMemo(() => algorithms[counter], [
    counter,
    algorithms
  ]);

  return [currentAlgorithm, counter, increment];
};

export const SingleResult: React.FC<SingleResultProps> = React.memo(function({
  initial,
  name,
  algorithms,
  criteria,
  nextFile
}) {
  const [resultGraphs, setResultGraphs] = useState<{
    [k: string]: GraphResultProps;
  }>({});

  // const [currentAlgorithmComputed, startNextAlgorithm] = useCounter(0);
  const [algo, algoIndex, startNextAlgorithm] = useCurrentAlgorithm(algorithms);

  const [resultGrid, setResultGrid] = useState<GridCriteriaAlgorithm>({});

  const [overlaps] = useState(() => {
    const nodes = initial.graph.nodes;
    let total = 0;
    let total2 = 0;
    let total3 = 0;

    for (let i = 0; i < nodes.length; i++) {
      const ni = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const nj = nodes[j];

        if (overlap(ni, nj)) total++;
        if (overlapX(ni, nj) && overlapY(ni, nj)) total2++;
        if (
          Math.abs(ni.x - nj.x) < (ni.width + nj.width) / 2 &&
          Math.abs(ni.y - nj.y) < (ni.height + nj.height) / 2
        )
          total3++;
      }
    }
    console.log(total);
    console.log(total2);
    console.log(total3);
    console.log(getAllOverlaps(initial.graph.nodes).length);
    return total;
  });
  const updateGrid = useCallback((bulk: any[]) => {
    setResultGrid(function(grid) {
      const gridCopy = { ...grid };
      for (const { criId, algoId, value } of bulk) {
        (gridCopy[criId] || (gridCopy[criId] = {}))[algoId] = value;
      }
      return gridCopy;
    });
  }, []);

  useEffect(() => {
    const initialGraph = initial.graph;

    const addResultsFromAlgorithm = function({ graph }: Result) {
      const payload = {
        graph: crop(graph),
        gml: toGML(graph),
        name: algo.name,
        id: algo.id
      };
      setResultGraphs(v => ({ ...v, [algo.id]: payload }));

      const bulk = _.map(criteria, ({ id, criterion }) => ({
        criId: id,
        algoId: algo.id,
        value: criterion(initialGraph, payload.graph).value
      }));
      updateGrid(bulk);

      if (algoIndex !== algorithms.length - 1) {
        startNextAlgorithm();
      } else {
        nextFile();
      }
    };

    if (isIE) {
      const graphcopy = {
        nodes: initialGraph.nodes.map(n => ({ ...n })),
        edges: initialGraph.edges.map(e => ({ ...e }))
      };
      addResultsFromAlgorithm(algo.algorithm!(graphcopy));
    } else {
      // no need to copy since it's passed to a web worker
      algo.worker!.algorithm(initialGraph).then(addResultsFromAlgorithm);
    }
    // eslint-disable-next-line
  }, [algo]);

  return (
    <section className="mv3">
      <h2>
        {name} <small>overlaps : {overlaps}</small>
      </h2>
      <GraphList initial={initial} current={resultGraphs} />
      <article className="criteria">
        <div className="overflow-x-auto">
          <table className="table-design tbth-min-w236-ml ttdh-w108-ml table-fixed-ml">
            <thead>
              <tr>
                <th className="tc">Criterias</th>
                {_.map(algorithms, ({ id, name }) => (
                  <th key={id} className="nowrap">
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {useMemo(
                () =>
                  _.map(criteria, ({ id, name }) => {
                    return (
                      <CriteriaLine
                        key={id}
                        name={name}
                        results={resultGrid[id]}
                      />
                    );
                  }),
                [criteria, resultGrid]
              )}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
});

export default SingleResult;

const CriteriaValue: React.FC<{ index: string; value: number }> = ({
  index,
  value
}) => <td key={index}>{round(value, -4)}</td>;

const CriteriaLine: React.FC<Pick<CriType, 'name'> & {
  results: { [k: string]: number };
}> = ({ name, results }) => {
  return (
    <tr className="striped--near-white">
      <th>{name}</th>
      {results &&
        _.map(results, (value, resindex) => (
          <CriteriaValue key={resindex} value={value} index={resindex} />
        ))}
    </tr>
  );
};
