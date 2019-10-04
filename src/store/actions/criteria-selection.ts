import { createStandardAction } from 'typesafe-actions';
import { SelectionType } from '../types';

const CRI_TOGGLE = 'criteria-selection/TOGGLE';
const CRI_SELECT = 'criteria-selection/SET';
const CRI_SELECT_MANY = 'criteria-selection/SELECT_MANY';
const CRI_SET_ALL = 'criteria-selection/SET_ALL';

export const toggleCri = createStandardAction(CRI_TOGGLE)<string>();

export const setCri = createStandardAction(CRI_SELECT)<[string, boolean]>();

export const setAllCri = createStandardAction(CRI_SET_ALL)<boolean>();

export const selectManyCri = createStandardAction(CRI_SELECT_MANY)<
  SelectionType
>();
