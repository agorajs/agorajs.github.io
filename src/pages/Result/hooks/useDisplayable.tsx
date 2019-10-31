import { useMemo, useState } from 'react';
import { FileType } from '../../../store/types';
import { GraphProps } from '../SingleResult';

type DisplayableProps = {
  file: FileType;
  initial: GraphProps;
};

export const useDisplayable = function(): [
  DisplayableProps[],
  (file: DisplayableProps) => void
] {
  const [displayable, setDisplayable] = useState<DisplayableProps[]>([]);
  const addDisplayable = useMemo(
    () => (file: DisplayableProps) => setDisplayable(d => [...d, file]),
    []
  );
  return [displayable, addDisplayable];
};
