import { Graph } from 'agora-graph';
import 'agora-diamond/dist/agora-diamond.min';
// // @ts-ignore TS2307
// import worker from 'workerize-loader!./worker'; // eslint-disable-line import/no-webpack-loader-syntax

declare global {
  var AgoraDiamond: any;
}

export function algorithm(graph: Graph) {
  const result = AgoraDiamond.diamondGraphRotation(graph);
  return result;
}
