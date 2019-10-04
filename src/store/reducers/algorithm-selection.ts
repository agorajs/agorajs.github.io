import { createReducer } from 'typesafe-actions';
import * as actions from '../actions/algorithm-selection';

import { toggle, set, selectMany, setAll } from './selection-utils';
export const algorithmSelection = createReducer({})
  .handleAction(actions.toggleAlg, toggle)
  .handleAction(actions.setAlg, set)
  .handleAction(actions.selectManyAlg, selectMany)
  .handleAction(actions.setAllAlg, setAll);

export default algorithmSelection;
