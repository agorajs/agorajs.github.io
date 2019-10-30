import { useMemo, useState } from 'react';
import { FileType } from '../../../store/types';
export const useDisplayable = function(): [
  FileType[],
  (file: FileType) => void
] {
  const [displayable, setDisplayable] = useState<FileType[]>([]);
  const addDisplayable = useMemo(
    () => (file: FileType) => setDisplayable(d => [...d, file]),
    []
  );
  return [displayable, addDisplayable];
};
