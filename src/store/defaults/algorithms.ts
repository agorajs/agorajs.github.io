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
  diamond: true,
  forbid: true,
};
/* eslint import/no-webpack-loader-syntax: off */
export const defaultAlgorithms: AlgorithmType[] = [
  {
    id: 'scale',
    name: 'SCALE',
    lazy: async function () {
      return (await import('agora-scaling')).default.algorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/scale.worker'
        )
      ).default(),
  },
  {
    id: 'pfs',
    name: 'PFS',
    reference: ['misue1995'],
    lazy: async function () {
      return (await import('agora-pfs')).default.algorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/pfs.worker'
        )
      ).default(),
  },
  {
    id: 'pfsp',
    name: "PFS'",
    reference: ['hayashi1998'],
    lazy: async function () {
      return (await import('agora-pfsp')).default.algorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/pfsp.worker'
        )
      ).default(),
  },
  {
    id: 'fta',
    name: 'FTA',
    reference: ['huang2007'],
    lazy: async function () {
      return (await import('agora-fta')).default.algorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/fta.worker'
        )
      ).default(),
  },
  {
    id: 'vpsc',
    name: 'VPSC',
    reference: ['dwyer2005'],
    lazy: async function () {
      return (await import('agora-vpsc')).default.algorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/vpsc.worker'
        )
      ).default(),
  },
  {
    id: 'prism',
    name: 'PRISM',
    reference: ['gansner2010'],
    lazy: async function () {
      return prismAlgorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/prism.worker'
        )
      ).default(),
  },
  {
    id: 'gtree',
    name: 'GTREE',
    reference: ['nachmanson2016'],
    lazy: async function () {
      return gtreeAlgorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/gtree.worker'
        )
      ).default(),
  },
  {
    id: 'rwordle_l',
    name: 'RWordle-L',
    reference: ['strobelt2012'],
    lazy: async function () {
      return (await import('agora-rworldle')).RWordleLAlgorithm.algorithm;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/rwordle-l.worker'
        )
      ).default(),
  },
  {
    id: 'diamond',
    name: 'Diamond',
    reference: ['meulemans2019'],
    lazy: async function () {
      return (await import('agora-diamond')).diamondGraphRotation;
    },
    worker: async function () {
      return (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/diamond.worker'
        )
      ).default();
    },
  },
  {
    id: 'forbid',
    name: 'FORBID',
    reference: ['giovannangeli2022'],
    lazy: async function () {
      return (await import('agora-forbid')).forbid;
    },
    worker: async () =>
      (
        await import(
          // @ts-ignore TS2307
          'workerize-loader!../../workers/forbid.worker'
        )
      ).default(),
  },
];

function prismAlgorithm(graph: Graph) {
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
}

function gtreeAlgorithm(graph: Graph) {
  const resultnodes = (window as any).gtree(graph.nodes);
  // console.log(resultnodes);
  for (let i = 0; i < graph.nodes.length; i++) {
    const node = graph.nodes[i];
    const [position, id] = resultnodes[i];
    if (id !== node.index) throw Error('not matching id exception');
    node.x = position.m_X;
    node.y = position.m_Y;
  }
  return { graph };
}
