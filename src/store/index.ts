import { combineReducers, createStore } from 'redux';
import {
  defaultAlgorithms,
  defaultAlgorithmSelection
} from './defaults/algorithms';
import defaultReferences from './defaults/references';

import algorithmSelection from './reducers/algorithm-selection';
import algorithms from './reducers/algorithms';
import criteriaSelection from './reducers/criteria-selection';
import fileList from './reducers/file';
import isUpload from './reducers/is-upload';
import references from './reducers/references';

import { AlgorithmType, FileType, ReferenceType, SelectionType } from './types';

export const reducers = combineReducers({
  algorithms: algorithms,
  algorithmSelection: algorithmSelection,
  criteriaSelection: criteriaSelection,
  files: fileList,
  isUpload: isUpload,
  references: references
  // examples: null
});

export type StateType = {
  algorithms: AlgorithmType[];
  algorithmSelection: SelectionType;
  criteriaSelection: SelectionType;
  files: FileType[];
  // examples: SelectionType;
  isUpload: boolean;
  references: ReferenceType[];
};

export const store = createStore(reducers, {
  algorithms: defaultAlgorithms,
  algorithmSelection: defaultAlgorithmSelection,
  criteriaSelection: { a: true, b: true, c: true, d: false },
  files: [],
  isUpload: true,
  references: defaultReferences
  // examples: { test: true }
});

export default store;
