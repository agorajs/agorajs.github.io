import { selected, allSelected } from './selection';
import { createSelector } from 'reselect';
import { StateType } from '..';
import _ from 'lodash';
import { isUpload } from './isUpload';

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
  algorithmSelection,
  selected
);

export const getCriteria = (state: StateType) => state.criteria;

export const criteriaSelection = (state: StateType) => state.criteriaSelection;
export const getCriteriaWithSelection = createSelector(
  getCriteria,
  criteriaSelection,
  (cris, selections) =>
    _.map(cris, item => ({ ...item, selected: selections[item.id] || false }))
);

export const getGroupedCriteria = createSelector(
  getCriteriaWithSelection,
  cri => _.groupBy(cri, 'group')
);

export const allCriteriaAreSelected = createSelector(
  criteriaSelection,
  allSelected
);
export const selectedCriteria = createSelector(
  criteriaSelection,
  selected
);

export const getFiles = (state: StateType) => state.files;

export const getExamples = (state: StateType) => state.examples;
export const getSelectedExamples = createSelector(
  getExamples,
  exs => _.filter(exs, 'selected')
);

export const canGenerateEmbeddings = createSelector(
  getFiles,
  getSelectedExamples,
  isUpload,
  (files, examples, isUpload) =>
    isUpload ? files.length > 0 : examples.length > 0
);
