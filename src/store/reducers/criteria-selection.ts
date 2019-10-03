import { createReducer, ActionType } from 'typesafe-actions';
import * as actions from '../actions/criteria-selection';

import _ from 'lodash';
import { SelectionType } from '../types';

export const criteriaSelection = createReducer<
  SelectionType,
  ActionType<typeof actions>
>({})
  .handleAction(actions.check, (state, { payload }) => {
    if (state[payload] !== undefined) {
      state[payload] = !state[payload];
      return { ...state };
    }
    return state;
  })
  .handleAction(actions.select, (state, { payload }) => {
    if (state[payload] === false) {
      state[payload] = true;
      return { ...state };
    }
    return state;
  })
  .handleAction(actions.selectMany, (state, { payload }) => {
    _.forEach(payload, (__, key) => {
      if (state[key] === false) {
        state[key] = true;
      }
    });

    return { ...state };
  })
  .handleAction(actions.selectAll, state => {
    const copy: SelectionType = {};

    _.forEach(state, (__, key) => {
      copy[key] = true;
    });

    return copy;
  })
  .handleAction(actions.unselect, (state, { payload }) => {
    if (state[payload] === true) {
      state[payload] = false;
      return { ...state };
    }
    return state;
  })
  .handleAction(actions.unselectAll, state => {
    const copy: SelectionType = {};

    _.forEach(state, (__, key) => {
      copy[key] = false;
    });

    return copy;
  });

export default criteriaSelection;
