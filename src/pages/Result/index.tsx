import React, { useState, useCallback, useEffect, useReducer } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { Flex } from '../../layout';
import DownloadLinkList from '../../components/DownloadLinkList';
import SVGGraph from '../../components/SVGGraph';
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

type LocalType = {
  fileCounter: number;
  algorithms: LoadedAlg[];
  criteria: {
    id: string;
    name: string;
    group: string;
    criterion: (initial: Graph, updated: Graph) => { value: number };
  }[];
  displayable: any[];
  algFinished: boolean;
  criFinished: boolean;
  criCounter: number;
  initials: { graph: Graph; gml?: string }[];
  algCounter: number;
  graphResults: { graph: Graph; gml?: string }[][];
  criteriaResults: any[][][];
};

type AlgMeta = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
};

type LoadedAlg = AlgMeta & { algorithm: Function };

function localReducer(state: LocalType, action: any): LocalType {
  switch (action.type) {
    // which file are we doing now ?
    case 'incrementFileCounter':
      return { ...state, fileCounter: state.fileCounter + 1 };
    // which one can be displayed
    case 'addDisplayableFile':
      return { ...state, displayable: [...state.displayable, action.payload] };
    // has loaded a new algorithm
    case 'addAlgorithm':
      return { ...state, algorithms: [...state.algorithms, action.payload] };
    case 'addCriterion':
      return { ...state, criteria: [...state.criteria, action.payload] };
    // algorithms have finished loading
    case 'algFinished':
      return {
        ...state,
        algFinished: true
      };
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

function addAlgorithm(payload: any) {
  return { type: 'addAlgorithm', payload };
}

function addCriterion(payload: any) {
  return { type: 'addCriterion', payload };
}

const Result: React.FC<RouteComponentProps> = function() {
  const finalFiles = useSelector(getFinalFiles);
  const selectedAlgs = useSelector(filteredAlgorithms);
  const selectedCri = useSelector(filteredCriterias);

  const [state, dispatch] = useReducer(localReducer, {
    fileCounter: -1,
    algCounter: -1,
    criCounter: -1,
    graphResults: [],
    initials: [],
    algFinished: false,
    criFinished: false,
    algorithms: [],
    criteria: [],
    displayable: [],
    criteriaResults: []
  });

  // loading algorithms
  useEffect(() => {
    const load = async (alglist: AlgMeta[]) => {
      for (const algo of alglist) {
        switch (algo.id) {
          case 'scale':
            const scaling = await import('agora-scaling');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: scaling.default.algorithm
              })
            );
            break;
          case 'pfs':
            const pfs = await import('agora-pfs');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: pfs.default.algorithm
              })
            );
            break;
          case 'pfsp':
            const pfsp = await import('agora-pfsp');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: pfsp.default.algorithm
              })
            );
            break;
          case 'fta':
            const fta = await import('agora-fta');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: fta.default.algorithm
              })
            );
            break;
          case 'vpsc':
            const vpsc = await import('agora-vpsc');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: vpsc.default.algorithm
              })
            );
            break;
          case 'prism':
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: (graph: Graph) => {
                  const resultnodes = (window as any).prism(graph.nodes);
                  // console.log(resultnodes);
                  for (let i = 0; i < graph.nodes.length; i++) {
                    const node = graph.nodes[i];
                    const [position, id] = resultnodes[i];
                    if (id !== node.index)
                      throw Error('not matching id exception');
                    node.x = position.m_X;
                    node.y = position.m_Y;
                  }

                  return { graph };
                }
              })
            );
            break;
          case 'gtree':
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: (graph: Graph) => {
                  const resultnodes = (window as any).prism(graph.nodes);
                  // console.log(resultnodes);
                  for (let i = 0; i < graph.nodes.length; i++) {
                    const node = graph.nodes[i];
                    const [position, id] = resultnodes[i];
                    if (id !== node.index)
                      throw Error('not matching id exception');
                    node.x = position.m_X;
                    node.y = position.m_Y;
                  }

                  return { graph };
                }
              })
            );
            break;
          case 'rwordle_l':
            const rwordle_l = await import('agora-rworldle');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: rwordle_l.RWordleLAlgorithm.algorithm
              })
            );
            break;
          case 'diamond':
            const diamond = await import('agora-diamond');
            dispatch(
              addAlgorithm({
                ...algo,
                algorithm: diamond.diamondGraphRotation
              })
            );
            break;
        }
      }

      dispatch({ type: 'algFinished' });
    };

    load(selectedAlgs);
    // eslint-disable-next-line
  }, []);

  // finished loading algs, loading criteria
  useEffect(() => {
    if (state.algFinished) {
      const load = async (criList: any[]) => {
        const { default: _def, manager, ...criteria } = await import(
          'agora-criteria'
        );
        for (const { id, name, group, path } of criList) {
          dispatch(
            addCriterion({
              id,
              name,
              group,
              criterion: _.get(criteria, path).criteria
            })
          );
        }
        // finished loading cri, parsing first file
        dispatch({ type: 'incrementFileCounter' });
      };

      load(selectedCri);
    }
    // eslint-disable-next-line
  }, [state.algFinished]);

  // big loop
  useEffect(() => {
    // ignoring init :)
    if (state.fileCounter > -1) {
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
      dispatch({ type: 'incrementAlgCounter' });
    } // eslint-disable-next-line
  }, [state.displayable]);

  // new Algorithm
  useEffect(() => {
    if (state.algCounter > -1) {
      const current = state.algorithms[state.algCounter];
      const { graph } = state.initials[state.fileCounter];
      const graphcopy = {
        nodes: graph.nodes.map(n => ({ ...n })),
        edges: graph.edges.map(e => ({ ...e }))
      };
      const result = current.algorithm(graphcopy);
      result.graph = crop(result.graph);
      result.gml = toGML(result.graph);
      dispatch({ type: 'addResult', payload: result });
      dispatch({ type: 'incrementCriCounter' });
    }
    // eslint-disable-next-line
  }, [state.algCounter]);

  useEffect(() => {
    if (state.criCounter > -1) {
      const initial = state.initials[state.fileCounter];
      const toEvaluate =
        state.graphResults[state.fileCounter][state.algCounter];

      const result = _.map(
        state.criteria,
        ({ criterion }) => criterion(initial.graph, toEvaluate.graph).value
      );

      dispatch({ type: 'addCriResult', payload: result });
      if (state.algCounter !== state.algorithms.length - 1)
        dispatch({ type: 'incrementAlgCounter' });
      else if (state.fileCounter !== finalFiles.length - 1)
        dispatch({ type: 'incrementFileCounter' });
    }
    // eslint-disable-next-line
  }, [state.criCounter]);

  if (finalFiles.length === 0) {
    return <Redirect from="" to="/" noThrow />;
  }
  return (
    <div className="tl mh3 code">
      {_.map(state.displayable, ({ id, name }, index) => {
        const currentFileResults = state.graphResults[index];
        const initial = state.initials[index];
        const criteriaResult = state.criteriaResults[index];
        return (
          <section key={id} className="mv3">
            <article>
              <h2>{name}</h2>
              <Flex className="flex-wrap ml6-l">
                {initial && (
                  <GraphMemo
                    name="Initial"
                    graph={initial.graph}
                    gml={initial.gml}
                  />
                )}

                {currentFileResults &&
                  _.map(currentFileResults, (result, algIndex) => {
                    const algo = state.algorithms[algIndex];
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
              <div className="relative">
                <div className="inner overflow-x-auto">
                  <table className="table-fixed">
                    <thead>
                      <tr>
                        <th className="tc">Criterias</th>
                        {_.map(state.algorithms, ({ id, name }) => (
                          <th key={id}>{name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(state.criteria, ({ id, name }, criIndex) => {
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
              </div>
            </article>
          </section>
        );
      })}
    </div>
  );
};

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
      <Flex column className="flex-wrap items-stretch">
        <h3>{name}</h3>
        <div className="graph mv1">
          <SVGGraph graph={graph} svgRef={svgRef} width={100} height={88} />
        </div>
        <DownloadLinkList
          name={name}
          json={JSON.stringify(graph)}
          gml={gml}
          svg={SVGContent}
        />
      </Flex>
    </div>
  );
};
const GraphMemo = React.memo(GraphContainer);

export default Result;
