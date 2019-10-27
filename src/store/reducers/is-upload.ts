import { createReducer, ActionType } from 'typesafe-actions';
import * as actions from '../actions/is-upload';

export const isUpload = createReducer<boolean, ActionType<typeof actions>>(true)
  .handleAction(actions.setAsUpload, () => true)
  .handleAction(actions.setAsExample, () => false);
export default isUpload;
