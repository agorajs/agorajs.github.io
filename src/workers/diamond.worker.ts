import { Graph } from 'agora-graph';
import { diamondGraphRotation } from 'agora-diamond';
// // @ts-ignore TS2307
// import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax

export function algorithm(graph: Graph) {
  const result = diamondGraphRotation(graph);
  return result;
}
