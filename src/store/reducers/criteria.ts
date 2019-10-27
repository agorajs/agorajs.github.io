import { createReducer } from 'typesafe-actions';
import { CriterionType } from '../types';
import { defaultCriteria } from '../defaults/criteria';

export const criteria = createReducer<CriterionType[]>(defaultCriteria);
export default criteria;
