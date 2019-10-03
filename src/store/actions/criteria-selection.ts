import { createStandardAction } from 'typesafe-actions';
import { SelectionType } from '../types';

export const check = createStandardAction('criteria-selection/CHECK')<string>();

export const select = createStandardAction('criteria-selection/SELECT')<
  string
>();
export const selectAll = createStandardAction(
  'criteria-selection/SELECT_ALL'
)();
export const selectMany = createStandardAction(
  'criteria-selection/SELECT_MANY'
)<SelectionType>();
export const unselect = createStandardAction('criteria-selection/UNSELECT')<
  string
>();
export const unselectAll = createStandardAction(
  'criteria-selection/UNSELECT_ALL'
)();
