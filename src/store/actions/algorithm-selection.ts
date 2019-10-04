import { createStandardAction } from 'typesafe-actions';
import { SelectionType } from '../types';

const ALG_TOGGLE = 'algorithm-selection/TOGGLE';
const ALG_SET = 'algorithm-selection/SET';
const ALG_SELECT_MANY = 'algorithm-selection/SELECT_MANY';
const SET_ALL = 'algorithm-selection/SET_ALL';

export const toggleAlg = createStandardAction(ALG_TOGGLE)<string>();
export const setAllAlg = createStandardAction(SET_ALL)<boolean>();
export const setAlg = createStandardAction(ALG_SET)<[string, boolean]>();
export const selectManyAlg = createStandardAction(ALG_SELECT_MANY)<
  SelectionType
>();
