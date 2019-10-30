import { Graph } from 'agora-graph';

// @ts-ignore TS2304
importScripts('gtree-prism.js');

export function algorithm(graph: Graph) {
  const resultnodes = (window as any).gtree(graph.nodes);

  for (let i = 0; i < graph.nodes.length; i++) {
    const node = graph.nodes[i];
    const [position, id] = resultnodes[i];
    if (id !== node.index) throw Error('not matching id exception');
    node.x = position.m_X;
    node.y = position.m_Y;
  }

  return { graph };
}
