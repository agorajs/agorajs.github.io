import { createStandardAction } from 'typesafe-actions';
import { FileType } from '../types';

const FILE_ADD = 'file/ADD';
const FILES_ADD = 'file/ADD_MANY';
const FILE_REMOVE = 'file/REMOVE';
const FILE_CLEAR = 'file/CLEAR';

export const addFile = createStandardAction(FILE_ADD)<FileType>();
export const addFiles = createStandardAction(FILES_ADD)<FileType[]>();

export const removeFile = createStandardAction(FILE_REMOVE)<string>();

export const clearFiles = createStandardAction(FILE_CLEAR)();
