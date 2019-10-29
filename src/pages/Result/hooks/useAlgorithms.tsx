import { useState, useEffect } from 'react';
import { AlgMeta, LoadedAlg } from '../index';

export function useAlgorithms(selectedAlgs: AlgMeta[]) {
  const [algorithms, setAlgorithms] = useState<LoadedAlg[]>();
  useEffect(() => {
    const loadAlgos = async (alglist: AlgMeta[]) => {
      console.log('algorithms loading start');
      const aggregator = [];
      for (const { lazy, ...algo } of alglist) {
        aggregator.push({ ...algo, algorithm: await lazy() });
      }
      setAlgorithms(aggregator);
      console.log('algorithms loading finish');
    };
    loadAlgos(selectedAlgs);
  }, [selectedAlgs]);
  return algorithms;
}
