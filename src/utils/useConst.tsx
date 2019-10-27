import { useState } from 'react';

export function useConst<T>(content: () => T) {
  const [get] = useState(content);
  return get;
}
