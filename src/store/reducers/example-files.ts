import { createReducer, ActionType } from 'typesafe-actions';
import _ from 'lodash';
import * as actions from '../actions/examples-files';

export const exampleFilesList = createReducer<
  { id: string; data: string }[],
  ActionType<typeof actions>
>([])
  .handleAction(actions.addExampleFile, (state, action) =>
    _.find(state, ['id', action.payload.id])
      ? state
      : [...state, action.payload]
  )
  .handleAction(actions.removeExampleFile, (state, action) =>
    _.filter(state, file => file.id !== action.payload)
  );
export default exampleFilesList;
