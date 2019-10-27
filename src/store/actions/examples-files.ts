import axios from 'axios';
import { createStandardAction } from 'typesafe-actions';
import { ExampleFileType } from '../types';
import { toggleExampleSelection } from './examples-selection';
import { StateType } from '..';
import _ from 'lodash';

const EXAMPLE_FILE_ADD = 'example-file/ADD';
const EXAMPLE_FILE_REMOVE = 'example-file/REMOVE';

export const addExampleFile = createStandardAction(EXAMPLE_FILE_ADD)<
  ExampleFileType
>();

export const removeExampleFile = createStandardAction(EXAMPLE_FILE_REMOVE)<
  string
>();

export const downloadThenToggleExampleSelection = function(filename: string) {
  return async function(dispatch: any, getState: () => StateType) {
    if (_.filter(getState().exampleFiles, v => v.id === filename).length > 0) {
      dispatch(removeExampleFile(filename));
    } else {
      const res = await axios.get('dataset/' + filename);

      dispatch(
        addExampleFile({ id: filename, name: filename, data: res.data })
      );
    }

    dispatch(toggleExampleSelection(filename));
  };
};
