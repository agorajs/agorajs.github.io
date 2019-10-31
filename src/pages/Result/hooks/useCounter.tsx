import { useState, Dispatch, SetStateAction, useMemo } from 'react';

export const useCounter = function(
  start: number,
  step: number = 1
): [number, () => void, Dispatch<SetStateAction<number>>] {
  const [counter, setCounter] = useState(start);
  const increment = useMemo(() => () => setCounter(c => c + step), [step]);
  return [counter, increment, setCounter];
};
