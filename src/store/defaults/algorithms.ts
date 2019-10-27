import { AlgorithmType } from '../types';

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
  { id: 'scale', name: 'SCALE' },
  { id: 'pfs', name: 'PFS', reference: 'misue1995' },
  { id: 'pfsp', name: "PFS'", reference: 'hayashi1998' },
  { id: 'fta', name: 'FTA', reference: 'huang2007' },
  { id: 'vpsc', name: 'VPSC', reference: 'dwyer2005' },
  { id: 'prism', name: 'PRISM', reference: 'gansner2010' },
  { id: 'gtree', name: 'GTREE', reference: 'nachmanson2016' },
  { id: 'rwordle_l', name: 'RWordle-L', reference: 'strobelt2012' },
  { id: 'diamond', name: 'Diamond', reference: 'meulemans2019' }
];
