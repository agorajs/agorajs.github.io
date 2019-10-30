import { Graph } from 'agora-graph';
import PFSP from 'agora-pfsp';
// // @ts-ignore TS2307
// import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax

export function algorithm(graph: Graph) {
  return PFSP.algorithm(graph);
}
