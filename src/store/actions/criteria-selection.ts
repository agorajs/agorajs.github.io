import { createStandardAction } from 'typesafe-actions';
import { SelectionType } from '../types';

const CRI_TOGGLE = 'criteria-selection/TOGGLE';
const CRI_SELECT = 'criteria-selection/SELECT';
const CRI_SELECT_MANY = 'criteria-selection/SELECT_MANY';
const CRI_SELECT_ALL = 'criteria-selection/SELECT_ALL';
const CRI_UNSELECT = 'criteria-selection/UNSELECT';
const CRI_UNSELECT_ALL = 'criteria-selection/UNSELECT_ALL';

export const toggleCri = createStandardAction(CRI_TOGGLE)<string>();

export const selectCri = createStandardAction(CRI_SELECT)<string>();

export const selectAllCri = createStandardAction(CRI_SELECT_ALL)();

export const selectManyCri = createStandardAction(CRI_SELECT_MANY)<
  SelectionType
>();

export const unselectCri = createStandardAction(CRI_UNSELECT)<string>();

export const unselectAllCri = createStandardAction(CRI_UNSELECT_ALL)();
