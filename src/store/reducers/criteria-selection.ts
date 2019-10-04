import { createReducer } from 'typesafe-actions';
import * as actions from '../actions/criteria-selection';
import {
  toggle,
  select,
  selectMany,
  selectAll,
  unselect,
  unselectAll
} from './selection-utils';

export const criteriaSelection = createReducer({})
  .handleAction(actions.toggleCri, toggle)
  .handleAction(actions.selectCri, select)
  .handleAction(actions.selectManyCri, selectMany)
  .handleAction(actions.selectAllCri, selectAll)
  .handleAction(actions.unselectCri, unselect)
  .handleAction(actions.unselectAllCri, unselectAll);

export default criteriaSelection;
