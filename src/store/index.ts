import { combineReducers, createStore } from 'redux';

import {
  defaultAlgorithms,
  defaultAlgorithmSelection
} from './defaults/algorithms';
import { defaultCriteria, defaultCriteriaSelection } from './defaults/criteria';
import { defaultReferences } from './defaults/references';

import algorithmSelection from './reducers/algorithm-selection';
import algorithms from './reducers/algorithms';
import criteria from './reducers/criteria';
import criteriaSelection from './reducers/criteria-selection';
import fileList from './reducers/file';
import isUpload from './reducers/is-upload';
import references from './reducers/references';

import {
  AlgorithmType,
  CriteriaType,
  FileType,
  ReferenceType,
  SelectionType
} from './types';

export const reducers = combineReducers({
  algorithms: algorithms,
  algorithmSelection: algorithmSelection,
  criteria: criteria,
  criteriaSelection: criteriaSelection,

  files: fileList,
  isUpload: isUpload,
  references: references
  // examples: null
});

export type StateType = {
  algorithms: AlgorithmType[];
  algorithmSelection: SelectionType;
  criteria: CriteriaType[];
  criteriaSelection: SelectionType;
  files: FileType[];
  // examples: SelectionType;
  isUpload: boolean;
  references: ReferenceType[];
};

export const store = createStore(reducers, {
  algorithms: defaultAlgorithms,
  algorithmSelection: defaultAlgorithmSelection,
  criteria: defaultCriteria,
  criteriaSelection: defaultCriteriaSelection,
  files: [],
  isUpload: true,
  references: defaultReferences
  // examples: { test: true }
});

export default store;
