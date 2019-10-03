import { createStandardAction } from 'typesafe-actions';
import { SelectionType } from '../types';

export const check = createStandardAction('algorithm-selection/CHECK')<
  string
>();
export const select = createStandardAction('algorithm-selection/SELECT')<
  string
>();
export const selectAll = createStandardAction(
  'algorithm-selection/SELECT_ALL'
)();
export const selectMany = createStandardAction(
  'algorithm-selection/SELECT_MANY'
)<SelectionType>();
export const unselect = createStandardAction('algorithm-selection/UNSELECT')<
  string
>();
export const unselectAll = createStandardAction(
  'algorithm-selection/UNSELECT_ALL'
)();
