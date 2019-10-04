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

export const set = (
  state: SelectionType,
  { payload: [name, value] }: PayloadAction<string, [string, boolean]>
) => {
  if (state[name] !== undefined) {
    state[name] = value;
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

export const setAll = (
  state: SelectionType,
  { payload }: PayloadAction<string, boolean>
) => {
  const copy: SelectionType = {};
  _.forEach(state, (__, key) => {
    copy[key] = payload;
  });
  return copy;
};
