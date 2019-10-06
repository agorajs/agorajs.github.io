import { createReducer, ActionType } from 'typesafe-actions';
import _ from 'lodash';
import * as actions from '../actions/file';
import { FileType } from '../types';

export const fileList = createReducer<FileType[], ActionType<typeof actions>>(
  []
)
  .handleAction(actions.addFile, (state, action) =>
    _.find(state, ['id', action.payload.id])
      ? state
      : [...state, action.payload]
  )
  .handleAction(actions.addFiles, (state, action) => [
    ...state,
    ...action.payload
  ])
  .handleAction(actions.removeFile, (state, action) =>
    _.filter(state, file => file.id !== action.payload)
  )
  .handleAction(actions.clearFiles, () => []);
export default fileList;
