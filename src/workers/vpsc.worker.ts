import { Graph } from 'agora-graph';
import VPSC from 'agora-vpsc';

export function algorithm(graph: Graph) {
  return VPSC.algorithm(graph);
}
