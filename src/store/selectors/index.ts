import { selected, allSelected } from './selection';
import { createSelector } from 'reselect';
import { StateType } from '..';

export const allAlgorithms = (state: StateType) => state.algoritmSelection;
export const allAlgorithmsAreSelected = createSelector(
  allAlgorithms,
  allSelected
);
export const selectedAlgorithms = createSelector(
  allAlgorithms,
  selected
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
export const isUpload = (state: StateType) => state.isUpload;
