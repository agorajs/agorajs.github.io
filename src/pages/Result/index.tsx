import { Redirect, RouteComponentProps } from '@reach/router';
import { toGML, toGraph } from 'agora-gml';
import {
  crop,
  Graph,
  round,
  Function,
  Result as GraphResult
} from 'agora-graph';
import _ from 'lodash';
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  filteredAlgorithms,
  filteredCriterias,
  getFinalFiles
} from '../../store/selectors';
import { useAlgorithms } from './hooks/useAlgorithms';
import { useCounter } from './hooks/useCounter';
import { useCriteria } from './hooks/useCriteria';
import { useDisplayable } from './hooks/useDisplayable';

import './index.css';
import { isIE } from './isIE';
import GraphList from './GraphList';

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
export type GraphProps = {
  graph: Graph;
  gml?: string;
};

export type GraphResultProps = GraphProps & {
  name: string;
  id: string;
};
type LocalType = {
  fileCounter: number;
  algCounter: number;
  graphResults: GraphResultProps[][];
  criteriaResults: any[][][];
};

export type AlgMeta = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
  lazy: () => Promise<Function<any>>;
  worker: () => Promise<any>;
};

export type LoadedAlg = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
  algorithm?: Function<any>;
  worker?: {
    algorithm: (graph: Graph) => Promise<GraphResult>;
    terminate: () => void;
  };
};

function localReducer(state: LocalType, action: any): LocalType {
  switch (action.type) {
    // which file are we doing now ?
    case 'incrementFileCounter':
      return { ...state, fileCounter: state.fileCounter + 1 };
    // which alg is runnin rn
    case 'incrementAlgCounter':
      return { ...state, algCounter: state.algCounter + 1 };
    case 'resetAlgCounter':
      return { ...state, algCounter: -1 };
    //  [filecounter][algcounter] and contains the graph
    case 'addResult': {
      const copy = [...state.graphResults];
      copy[state.fileCounter] = copy[state.fileCounter] || [];
      const deeperCopy = [...copy[state.fileCounter]];
      deeperCopy[state.algCounter] = action.payload;
      copy[state.fileCounter] = deeperCopy;
      return { ...state, graphResults: copy };
    }
    case 'addCriResult': {
      const copy = [...state.criteriaResults];
      copy[state.fileCounter] = copy[state.fileCounter] || []; //create if not exist
      for (let criIdx = 0; criIdx < action.payload.length; criIdx++) {
        const value = action.payload[criIdx];

        copy[state.fileCounter][criIdx] = copy[state.fileCounter][criIdx] || []; //create if not exist
        copy[state.fileCounter][criIdx][state.algCounter] = value;
      }

      return { ...state, criteriaResults: copy };
    }
    default:
      throw Error('error localreducer');
  }
}

const useInitials = function(): [GraphProps[], (initial: GraphProps) => void] {
  const [initials, setInitials] = useState<GraphProps[]>([]);
  const addInitial = useMemo(
    () => (initial: GraphProps) => setInitials(i => [...i, initial]),
    []
  );

  return [initials, addInitial];
};

export const Result: React.FC<RouteComponentProps> = function() {
  const finalFiles = useSelector(getFinalFiles);
  const selectedAlgs = useSelector(filteredAlgorithms);
  const selectedCri = useSelector(filteredCriterias);

  // loading algorithms
  const algorithms = useAlgorithms(selectedAlgs);

  // finished loading algs, loading criteria
  const criteria = useCriteria(selectedCri);

  // displaying more and more :)
  const [displayable, addDisplayable] = useDisplayable();

  const [initials, addInitial] = useInitials();

  const [state, dispatch] = useReducer(localReducer, {
    fileCounter: -1,
    algCounter: -1,
    graphResults: [],
    criteriaResults: []
  });

  const [, incrementFileCounter] = useCounter(-1);
  const [, incrementAlgorithm, setAlgorithmCounter] = useCounter(-1);

  const runCriterias = useMemo(
    () =>
      function(initial: Graph, toEvaluate: GraphResultProps) {
        // const initial = initials[state.fileCounter];
        // const toEvaluate =
        //   state.graphResults[state.fileCounter][state.algCounter];

        const result = _.map(
          criteria,
          ({ criterion }) => criterion(initial, toEvaluate.graph).value
        );

        dispatch({ type: 'addCriResult', payload: result });
        if (state.algCounter !== algorithms!.length - 1) {
          incrementAlgorithm();
          dispatch({ type: 'incrementAlgCounter' });
        } else if (state.fileCounter !== finalFiles.length - 1) {
          incrementFileCounter();
          dispatch({ type: 'incrementFileCounter' });
        } else {
          // destroy all workers
          if (!isIE)
            for (const alg of algorithms!) {
              alg.worker!.terminate();
            }
        }
      },
    [
      algorithms,
      criteria,
      dispatch,
      state.algCounter,
      state.fileCounter,
      finalFiles.length,
      incrementAlgorithm,
      incrementFileCounter
    ]
  );

  // criterias and algorithms have been loaded
  useEffect(() => {
    if (algorithms && criteria) {
      incrementFileCounter();
      dispatch({ type: 'incrementFileCounter' });
    }
  }, [algorithms, criteria, incrementFileCounter]);

  // big loop
  useEffect(() => {
    // ignoring init :)
    if (state.fileCounter > -1) {
      setAlgorithmCounter(-1);
      dispatch({ type: 'resetAlgCounter' });
      addDisplayable(finalFiles[state.fileCounter]);
    }
    // eslint-disable-next-line
  }, [state.fileCounter]);

  // display file view
  useEffect(() => {
    if (displayable.length > 0) {
      const file = finalFiles[state.fileCounter];
      // console.log(file.data);

      const graph = crop(toGraph(file.data));
      addInitial({ graph, gml: file.data });
      // dispatch({ type: 'addInitial', payload: { graph, gml: file.data } });
      incrementAlgorithm();
      dispatch({ type: 'incrementAlgCounter' });
    } // eslint-disable-next-line
  }, [displayable]);

  // new Algorithm
  useEffect(() => {
    if (state.algCounter > -1) {
      const current = algorithms![state.algCounter];
      const { graph: initialGraph } = initials[state.fileCounter];

      const addResultsFromAlgorithm = function({ graph }: GraphResult) {
        const payload = {
          graph: crop(graph),
          gml: toGML(graph),
          name: current.name,
          id: current.id
        };
        dispatch({ type: 'addResult', payload });

        runCriterias(initialGraph, payload);
      };

      if (isIE) {
        const graphcopy = {
          nodes: initialGraph.nodes.map(n => ({ ...n })),
          edges: initialGraph.edges.map(e => ({ ...e }))
        };
        addResultsFromAlgorithm(current.algorithm!(graphcopy));
      } else {
        // no need to copy since it's passed to a web worker
        current.worker!.algorithm(initialGraph).then(addResultsFromAlgorithm);
      }
    }

    // eslint-disable-next-line
  }, [state.algCounter]);

  const styled = useMemo(() => {
    let maxWidth = 128 + 98; // initial graph alignment
    // each algorithm
    maxWidth += 98 * (algorithms ? algorithms.length : 0);
    return (
      <style scoped>
        {`
/* browser sidebar correction */
@media (min-width: ${maxWidth + 30}px) {
.justify-start-ml{
  justify-content: start;
}
.mw8-ml {
max-width: ${maxWidth}px;
}

.tbth-min-w236-ml tbody th {
min-width: 226px;
}

.ttdh-w108-ml td,
.ttdh-w108-ml th {
width: 98px;
}

.ml128-ml {
margin-left: 128px;
}

.table-fixed-ml {
table-layout: fixed;
width: auto;
}
}`}
      </style>
    );
  }, [algorithms]);

  if (finalFiles.length === 0) {
    return <Redirect from="" to="/" noThrow />;
  }

  return (
    <>
      {styled}
      <div className="mw8-ml center tl mh3 code">
        {_.map(displayable, ({ id, name }, index) => {
          const criteriaResult = state.criteriaResults[index];

          // return <SingleResult algorithms={algorithms!} criteria={criteria!} />;
          return (
            <section key={id} className="mv3">
              <h2>{name}</h2>
              <GraphList
                initial={initials[index]}
                current={state.graphResults[index]}
              />
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
                      {_.map(criteria, ({ id, name }, criIndex) => {
                        return (
                          <tr key={id} className="striped--near-white">
                            <th>{name}</th>
                            {criteriaResult &&
                              _.map(
                                criteriaResult[criIndex],
                                (value, resindex) => (
                                  <td key={resindex}>{round(value, -4)}</td>
                                )
                              )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </article>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Result;
