import { Graph } from 'agora-graph';
import { RWordleLAlgorithm } from 'agora-rworldle';
// // @ts-ignore TS2307
// import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax

export function algorithm(graph: Graph) {
  console.log('rwordle worker');

  return RWordleLAlgorithm.algorithm(graph);
}
