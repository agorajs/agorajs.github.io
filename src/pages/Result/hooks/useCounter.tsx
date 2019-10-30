import { useState, Dispatch, SetStateAction, useMemo } from 'react';

export const useCounter = function(
  init: number
): [number, () => void, Dispatch<SetStateAction<number>>] {
  const [counter, setCounter] = useState(init);
  const increment = useMemo(() => () => setCounter(c => c + 1), []);
  return [counter, increment, setCounter];
};
