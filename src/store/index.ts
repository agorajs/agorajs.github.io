import { createStore, combineReducers } from 'redux';
import criteriaSelection from './reducers/criteria-selection';
import algorithmSelection from './reducers/algorithm-selection';
import { SelectionType } from './types';
export const reducers = combineReducers({
  algoritmSelection: algorithmSelection,
  criteriaSelection: criteriaSelection
});

export type StateType = {
  algoritmSelection: SelectionType;
  criteriaSelection: SelectionType;
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
  criteriaSelection: { a: true, b: true, c: true, d: false }
});

export default store;
