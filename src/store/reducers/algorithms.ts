import { createReducer } from 'typesafe-actions';
import { AlgorithmType } from '../types';
import { defaultAlgorithms } from '../defaults/algorithms';

export const algorithms = createReducer<AlgorithmType[]>(defaultAlgorithms);
export default algorithms;
