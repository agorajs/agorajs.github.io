import React, { useEffect, useReducer, useMemo } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { Flex } from '../../layout';
import './index.css';
import { useSelector } from 'react-redux';
import {
  getFinalFiles,
  filteredCriterias,
  filteredAlgorithms
} from '../../store/selectors';
import { Graph, crop, round } from 'agora-graph';
import _ from 'lodash';
import { toGraph, toGML } from 'agora-gml';
import { useCriteria } from './hooks/useCriteria';
import { useAlgorithms } from './hooks/useAlgorithms';
import { GraphMemo } from './GraphContainer';
import { useCounter } from './hooks/useCounter';

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

type LocalType = {
  fileCounter: number;
  displayable: any[];
  criFinished: boolean;
  criCounter: number;
  initials: { graph: Graph; gml?: string }[];
  algCounter: number;
  graphResults: { graph: Graph; gml?: string }[][];
  criteriaResults: any[][][];
};

export type AlgMeta = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
  lazy: () => Promise<any>;
};

export type LoadedAlg = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
  algorithm: Function;
};

function localReducer(state: LocalType, action: any): LocalType {
  switch (action.type) {
    // which file are we doing now ?
    case 'incrementFileCounter':
      return { ...state, fileCounter: state.fileCounter + 1 };
    // which one can be displayed
    case 'addDisplayableFile':
      return { ...state, displayable: [...state.displayable, action.payload] };
    // criteria have finished loading
    case 'criFinished':
      return {
        ...state,
        criFinished: true
      };
    // which alg is runnin rn
    case 'incrementAlgCounter':
      return { ...state, algCounter: state.algCounter + 1 };
    case 'incrementCriCounter':
      return { ...state, criCounter: state.criCounter + 1 };
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
    case 'addInitial': {
      return { ...state, initials: [...state.initials, action.payload] };
    }
    default:
      throw Error('error localreducer');
  }
}

export const Result: React.FC<RouteComponentProps> = function() {
  const finalFiles = useSelector(getFinalFiles);
  const selectedAlgs = useSelector(filteredAlgorithms);
  const selectedCri = useSelector(filteredCriterias);

  // loading algorithms
  const algorithms = useAlgorithms(selectedAlgs);

  // finished loading algs, loading criteria
  const criteria = useCriteria(selectedCri);

  const [state, dispatch] = useReducer(localReducer, {
    fileCounter: -1,
    algCounter: -1,
    criCounter: -1,
    graphResults: [],
    initials: [],
    criFinished: false,
    displayable: [],
    criteriaResults: []
  });

  const [, incrementFileCounter] = useCounter(-1);
  const [, incrementCriCounter] = useCounter(-1);
  const [, incrementAlgorithm, setAlgorithmCounter] = useCounter(-1);

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
      dispatch({
        type: 'addDisplayableFile',
        payload: finalFiles[state.fileCounter]
      });
    }
    // eslint-disable-next-line
  }, [state.fileCounter]);

  // display file view
  useEffect(() => {
    if (state.displayable.length > 0) {
      const file = finalFiles[state.fileCounter];
      // console.log(file.data);

      const graph = crop(toGraph(file.data));
      dispatch({ type: 'addInitial', payload: { graph, gml: file.data } });
      incrementAlgorithm();
      dispatch({ type: 'incrementAlgCounter' });
    } // eslint-disable-next-line
  }, [state.displayable]);

  // new Algorithm
  useEffect(() => {
    if (state.algCounter > -1) {
      const current = algorithms![state.algCounter];
      const { graph } = state.initials[state.fileCounter];
      const graphcopy = {
        nodes: graph.nodes.map(n => ({ ...n })),
        edges: graph.edges.map(e => ({ ...e }))
      };

      (async function() {
        console.log(current);

        const result = await current.algorithm(graphcopy);

        result.graph = crop(result.graph);
        result.gml = toGML(result.graph);

        dispatch({ type: 'addResult', payload: result });
        incrementCriCounter();
        dispatch({ type: 'incrementCriCounter' });
      })();
      // const result = current.algorithm(graphcopy);
      // result.graph = crop(result.graph);
      // result.gml = toGML(result.graph);
      // dispatch({ type: 'addResult', payload: result });
      // incrementCriCounter();
      // dispatch({ type: 'incrementCriCounter' });
    }
    // eslint-disable-next-line
  }, [state.algCounter]);

  useEffect(() => {
    if (state.criCounter > -1) {
      const initial = state.initials[state.fileCounter];
      const toEvaluate =
        state.graphResults[state.fileCounter][state.algCounter];

      const result = _.map(
        criteria,
        ({ criterion }) => criterion(initial.graph, toEvaluate.graph).value
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
        
      }
    }
    // eslint-disable-next-line
  }, [state.criCounter]);

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
        {_.map(state.displayable, ({ id, name }, index) => {
          const currentFileResults = state.graphResults[index];
          const initial = state.initials[index];
          const criteriaResult = state.criteriaResults[index];
          return (
            <section key={id} className="mv3">
              <article>
                <h2>{name}</h2>
                <Flex wrap className="justify-center justify-start-ml">
                  <div className="ml128-ml">
                    {initial && (
                      <GraphMemo
                        name="Initial"
                        graph={initial.graph}
                        gml={initial.gml}
                      />
                    )}
                  </div>
                  {currentFileResults &&
                    _.map(currentFileResults, (result, algIndex) => {
                      const algo = algorithms![algIndex];
                      return (
                        <GraphMemo
                          key={algo.id}
                          name={algo.name}
                          graph={result.graph}
                          gml={result.gml}
                        />
                      );
                    })}
                </Flex>
              </article>
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
