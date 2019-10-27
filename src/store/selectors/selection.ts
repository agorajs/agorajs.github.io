import _ from 'lodash';
import { SelectionType } from '../types';

export const selected = (state: SelectionType) =>
  _(state)
    .pickBy(v => v)
    .map((__, k) => k)
    .value();
export const allSelected = (state: SelectionType) =>
  _.every(state, v => v === true);
