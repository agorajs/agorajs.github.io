import { createStore, combineReducers } from 'redux';

import criteriaSelection from './reducers/criteria-selection';
import algorithmSelection from './reducers/algorithm-selection';
import fileList from './reducers/file';
import isUpload from './reducers/is-upload';
import references from './reducers/references';

import { SelectionType, FileType, ReferenceType } from './types';
import defaultReferences from './defaults/references';

export const reducers = combineReducers({
  algoritmSelection: algorithmSelection,
  criteriaSelection: criteriaSelection,
  files: fileList,
  isUpload: isUpload,
  references: references
  // examples: null
});

export type StateType = {
  algoritmSelection: SelectionType;
  criteriaSelection: SelectionType;
  files: FileType[];
  // examples: SelectionType;
  isUpload: boolean;
  references: ReferenceType[];
};

export const store = createStore(reducers, {
  algoritmSelection: {
    SCALE: true,
    PFS: true,
    "PFS'": true,
    FTA: true,
    VPSC: true,
    GTREE: true,
    PRISM: true,
    'RWordle-L': true,
    Diamond: true
  },
  criteriaSelection: { a: true, b: true, c: true, d: false },
  files: [],
  isUpload: true,
  references: defaultReferences
  // examples: { test: true }
});

export default store;
