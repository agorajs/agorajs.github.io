import _ from 'lodash';
import { SelectionType } from '../types';

export const selected = (state: SelectionType) => _.map(state, (__, k) => k);
export const allSelected = (state: SelectionType) =>
  _.every(state, v => v === true);
