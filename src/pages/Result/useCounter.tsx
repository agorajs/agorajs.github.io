import { useState, useCallback } from 'react';

export const useCounter = function(init: number): [number, () => void] {
  const [counter, setCounter] = useState(init);
  const increment = useCallback(() => setCounter(c => c + 1), []);
  return [counter, increment];
};
