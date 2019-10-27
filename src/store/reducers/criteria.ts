import { createReducer } from 'typesafe-actions';
import { CriteriaType } from '../types';
import { defaultCriteria } from '../defaults/criteria';

export const criteria = createReducer<CriteriaType[]>(defaultCriteria);
export default criteria;
