import { createStandardAction } from 'typesafe-actions';
import { SelectionType } from '../types';

const ALG_TOGGLE = 'algorithm-selection/TOGGLE';
const ALG_SELECT = 'algorithm-selection/SELECT';
const ALG_SELECT_MANY = 'algorithm-selection/SELECT_MANY';
const ALG_SELECT_ALL = 'algorithm-selection/SELECT_ALL';
const ALG_UNSELECT = 'algorithm-selection/UNSELECT';
const ALG_UNSELECT_ALL = 'algorithm-selection/UNSELECT_ALL';

export const toggleAlg = createStandardAction(ALG_TOGGLE)<string>();
export const selectAlg = createStandardAction(ALG_SELECT)<string>();
export const selectAllAlg = createStandardAction(ALG_SELECT_ALL)();
export const selectManyAlg = createStandardAction(ALG_SELECT_MANY)<
  SelectionType
>();
export const unselectAlg = createStandardAction(ALG_UNSELECT)<string>();
export const unselectAllAlg = createStandardAction(ALG_UNSELECT_ALL)();
