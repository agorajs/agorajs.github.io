import { createStore, combineReducers } from 'redux';
import criteriaSelection from './reducers/criteria-selection';
import algorithmSelection from './reducers/algorithm-selection';
import fileList from './reducers/file';
import { SelectionType, FileType } from './types';
export const reducers = combineReducers({
  algoritmSelection: algorithmSelection,
  criteriaSelection: criteriaSelection,
  files: fileList
  // examples: null
});

export type StateType = {
  algoritmSelection: SelectionType;
  criteriaSelection: SelectionType;
  files: FileType[];
  // examples: SelectionType;
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
  files: []
  // examples: { test: true }
});

export default store;
