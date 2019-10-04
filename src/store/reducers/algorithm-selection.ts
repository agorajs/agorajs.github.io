import { createReducer } from 'typesafe-actions';
import * as actions from '../actions/algorithm-selection';

import {
  toggle,
  select,
  selectMany,
  selectAll,
  unselect,
  unselectAll
} from './selection-utils';
export const algorithmSelection = createReducer({})
  .handleAction(actions.toggleAlg, toggle)
  .handleAction(actions.selectAlg, select)
  .handleAction(actions.selectManyAlg, selectMany)
  .handleAction(actions.selectAllAlg, selectAll)
  .handleAction(actions.unselectAlg, unselect)
  .handleAction(actions.unselectAllAlg, unselectAll);

export default algorithmSelection;
