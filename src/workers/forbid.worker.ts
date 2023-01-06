import type { Graph } from 'agora-graph';
import { forbid } from 'agora-forbid';

export function algorithm(graph: Graph) {
  return forbid(graph);
}
