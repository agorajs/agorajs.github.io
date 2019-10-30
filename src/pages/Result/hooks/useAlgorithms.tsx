import { useState, useEffect } from 'react';
import { AlgMeta, LoadedAlg } from '../index';
import _ from 'lodash';

export function useAlgorithms(selectedAlgs: AlgMeta[]) {
  const [algorithms, setAlgorithms] = useState<LoadedAlg[]>();
  useEffect(() => {
    const loadAlgos = async (alglist: AlgMeta[]) => {
      console.log('algorithms loading start');
      const aggregator = await Promise.all(
        _.map(alglist, async ({ lazy, ...algo }) => ({
          ...algo,
          algorithm: await lazy()
        }))
      );
      setAlgorithms(aggregator);
      console.log('algorithms loading finish');
    };
    loadAlgos(selectedAlgs);
  }, [selectedAlgs]);
  return algorithms;
}
