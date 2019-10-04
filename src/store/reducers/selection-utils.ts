import { PayloadAction } from 'typesafe-actions';
import _ from 'lodash';
import { SelectionType } from '../types';

export const toggle = (
  state: SelectionType,
  { payload }: PayloadAction<string, string>
) => {
  if (state[payload] !== undefined) {
    state[payload] = !state[payload];
    return { ...state };
  }
  return state;
};

export const select = (
  state: SelectionType,
  { payload }: PayloadAction<string, string>
) => {
  if (state[payload] === false) {
    state[payload] = true;
    return { ...state };
  }
  return state;
};

export const selectMany = (
  state: SelectionType,
  { payload }: PayloadAction<string, SelectionType>
) => {
  _.forEach(payload, (__, key) => {
    if (state[key] === false) {
      state[key] = true;
    }
  });
  return { ...state };
};

export const selectAll = (state: SelectionType) => {
  const copy: SelectionType = {};
  _.forEach(state, (__, key) => {
    copy[key] = true;
  });
  return copy;
};

export const unselect = (
  state: SelectionType,
  { payload }: PayloadAction<string, string>
) => {
  if (state[payload] === true) {
    state[payload] = false;
    return { ...state };
  }
  return state;
};

export const unselectAll = (state: SelectionType) => {
  const copy: SelectionType = {};
  _.forEach(state, (__, key) => {
    copy[key] = false;
  });
  return copy;
};
