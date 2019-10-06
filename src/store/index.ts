import { createStore, combineReducers } from 'redux';
import criteriaSelection from './reducers/criteria-selection';
import algorithmSelection from './reducers/algorithm-selection';
import fileList from './reducers/file';
import { SelectionType, FileType } from './types';
export const reducers = combineReducers({
  algoritmSelection: algorithmSelection,
  criteriaSelection: criteriaSelection,
  files: fileList
});

export type StateType = {
  algoritmSelection: SelectionType;
  criteriaSelection: SelectionType;
  files: FileType[];
};

export const store = createStore(reducers, {
  algoritmSelection: {
    scale: true,
    pfs: true,
    pfsp: true,
    diamond: true,
    fta: true,
    vpsc: true,
    gtree: true,
    prism: true,
    rwordle: true
  },
  criteriaSelection: { a: true, b: true, c: true, d: false },
  files: []
});

export default store;
