import { AlgorithmType } from '../types';
import { Graph } from 'agora-graph';

export const defaultAlgorithmSelection = {
  scale: true,
  pfs: true,
  pfsp: true,
  fta: true,
  vpsc: true,
  prism: true,
  gtree: true,
  rwordle_l: true,
  diamond: true
};

export const defaultAlgorithms: AlgorithmType[] = [
  {
    id: 'scale',
    name: 'SCALE',
    lazy: async function() {
      return (await import('agora-scaling')).default.algorithm;
    }
  },
  {
    id: 'pfs',
    name: 'PFS',
    reference: ['misue1995'],
    lazy: async function() {
      return (await import('agora-pfs')).default.algorithm;
    }
  },
  {
    id: 'pfsp',
    name: "PFS'",
    reference: ['hayashi1998'],
    lazy: async function() {
      return (await import('agora-pfsp')).default.algorithm;
    }
  },
  {
    id: 'fta',
    name: 'FTA',
    reference: ['huang2007'],
    lazy: async function() {
      return (await import('agora-fta')).default.algorithm;
    }
  },
  {
    id: 'vpsc',
    name: 'VPSC',
    reference: ['dwyer2005'],
    lazy: async function() {
      return (await import('agora-vpsc')).default.algorithm;
    }
  },
  {
    id: 'prism',
    name: 'PRISM',
    reference: ['gansner2010'],
    lazy: async function() {
      return function(graph: Graph) {
        const resultnodes = (window as any).prism(graph.nodes);
        // console.log(resultnodes);
        for (let i = 0; i < graph.nodes.length; i++) {
          const node = graph.nodes[i];
          const [position, id] = resultnodes[i];
          if (id !== node.index) throw Error('not matching id exception');
          node.x = position.m_X;
          node.y = position.m_Y;
        }
        return { graph };
      };
    }
  },
  {
    id: 'gtree',
    name: 'GTREE',
    reference: ['nachmanson2016'],
    lazy: async function() {
      return function(graph: Graph) {
        const resultnodes = (window as any).prism(graph.nodes);
        // console.log(resultnodes);
        for (let i = 0; i < graph.nodes.length; i++) {
          const node = graph.nodes[i];
          const [position, id] = resultnodes[i];
          if (id !== node.index) throw Error('not matching id exception');
          node.x = position.m_X;
          node.y = position.m_Y;
        }

        return { graph };
      };
    }
  },
  {
    id: 'rwordle_l',
    name: 'RWordle-L',
    reference: ['strobelt2012'],
    lazy: async function() {
      const worker = (await import(
        // @ts-ignore TS2307
        'workerize-loader!../../workers/rwordle-l.worker'
      )).default();

      return worker.algorithm;
    }
  },
  {
    id: 'diamond',
    name: 'Diamond',
    reference: ['meulemans2019'],
    lazy: async function() {
      const worker = (await import(
        // @ts-ignore TS2307
        'workerize-loader!../../workers/diamond.worker'
      )).default();

      return worker.algorithm;
      // return (await import('agora-diamond')).diamondGraphRotation;
    }
  }
];
