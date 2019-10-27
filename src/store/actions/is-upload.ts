import { createStandardAction } from 'typesafe-actions';

const IS_UPLOAD = 'is-upload/TRUE';
const IS_EXAMPLE = 'is-upload/FALSE';

export const setAsUpload = createStandardAction(IS_UPLOAD)();
export const setAsExample = createStandardAction(IS_EXAMPLE)();
