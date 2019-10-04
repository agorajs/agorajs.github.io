import { createReducer } from 'typesafe-actions';
import * as actions from '../actions/criteria-selection';
import { toggle, set, selectMany, setAll } from './selection-utils';

export const criteriaSelection = createReducer({})
  .handleAction(actions.toggleCri, toggle)
  .handleAction(actions.setCri, set)
  .handleAction(actions.selectManyCri, selectMany)
  .handleAction(actions.setAllCri, setAll);

export default criteriaSelection;
