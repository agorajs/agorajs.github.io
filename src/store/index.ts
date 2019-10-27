import { combineReducers, createStore } from 'redux';

import {
  defaultAlgorithms,
  defaultAlgorithmSelection
} from './defaults/algorithms';
import { defaultCriteria, defaultCriteriaSelection } from './defaults/criteria';
import { defaultExamples } from './defaults/examples';
import { defaultReferences } from './defaults/references';

import algorithmSelection from './reducers/algorithm-selection';
import algorithms from './reducers/algorithms';
import criteria from './reducers/criteria';
import criteriaSelection from './reducers/criteria-selection';
import examples from './reducers/examples';
import fileList from './reducers/file';
import isUpload from './reducers/is-upload';
import references from './reducers/references';

import {
  AlgorithmType,
  CriterionType,
  FileType,
  ReferenceType,
  SelectionType,
  SelectableFileType
} from './types';

export const reducers = combineReducers({
  algorithms,
  algorithmSelection,
  criteria,
  criteriaSelection,
  files: fileList,
  isUpload,
  references,
  examples
  // examples: null
});

export type StateType = {
  algorithms: AlgorithmType[];
  algorithmSelection: SelectionType;
  criteria: CriterionType[];
  criteriaSelection: SelectionType;
  files: FileType[];
  // examples: SelectionType;
  isUpload: boolean;
  references: ReferenceType[];
  examples: SelectableFileType[];
};

export const store = createStore(reducers, {
  algorithms: defaultAlgorithms,
  algorithmSelection: defaultAlgorithmSelection,
  criteria: defaultCriteria,
  criteriaSelection: defaultCriteriaSelection,
  files: [],
  isUpload: true,
  references: defaultReferences,
  examples: defaultExamples
  // examples: { test: true }
});

export default store;
