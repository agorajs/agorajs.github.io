import { createStandardAction } from 'typesafe-actions';

const EXAMPLE_TOGGLE = 'examples-selection/TOGGLE';

export const toggleExampleSelection = createStandardAction(EXAMPLE_TOGGLE)<
  string
>();
