import { selected, allSelected } from './selection';
import { createSelector } from 'reselect';
import { StateType } from '..';
import _ from 'lodash';

export const getAlgorithms = (state: StateType) => state.algorithms;
export const algorithmSelection = (state: StateType) =>
  state.algorithmSelection;

export const getAlgorithmsWithSelection = createSelector(
  getAlgorithms,
  algorithmSelection,
  (algs, selections) =>
    _.map(algs, item => ({ ...item, selected: selections[item.id] || false }))
);

export const areAllAlgorithmSelected = createSelector(
  algorithmSelection,
  allSelected
);

export const selectedAlgorithms = createSelector(
  selected,
  getAlgorithms,
  (selected, algs) => {
    return _.intersectionWith(algs, selected, ({ id }, val) => val === id);
  }
);

export const allCriterias = (state: StateType) => state.criteriaSelection;

export const allCriteriasAreSelected = createSelector(
  allCriterias,
  allSelected
);
export const selectedCriterias = createSelector(
  allCriterias,
  selected
);

export const files = (state: StateType) => state.files;

export const getReferences = (state: StateType) => state.references;

export const getReferencesWithIndex = createSelector(
  getReferences,
  refs => _.map(refs, (v, index) => ({ ...v, index: index + 1 }))
);

export const referencesToIndexMap = createSelector(
  getReferencesWithIndex,
  refs => _.keyBy(refs, 'id')
);

export const isUpload = (state: StateType) => state.isUpload;
