import { createReducer } from 'typesafe-actions';
import { ReferenceType } from '../types';

export const references = createReducer<ReferenceType[]>([]);
export default references;
