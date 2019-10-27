import { createReducer, ActionType } from 'typesafe-actions';
import { defaultExamples } from '../defaults/examples';
import { SelectableFileType } from '../types';
import * as actions from '../actions/examples-selection';
export const examples = createReducer<
  SelectableFileType[],
  ActionType<typeof actions>
>(defaultExamples).handleAction(
  actions.toggleExampleSelection,
  (state, action) =>
    state.map(v => {
      if (v.file === action.payload) v.selected = !v.selected;
      return v;
    })
);
export default examples;
