import { createSelector } from 'reselect';
import { StateType } from '..';
import _ from 'lodash';
export const getReferences = (state: StateType) => state.references;
export const getReferencesWithIndex = createSelector(
  getReferences,
  refs => _.map(refs, (v, index) => ({ ...v, index: index + 1 }))
);
export const referencesToIndexMap = createSelector(
  getReferencesWithIndex,
  refs => _.keyBy(refs, 'id')
);
