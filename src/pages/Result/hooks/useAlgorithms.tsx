import { useState, useEffect } from 'react';
import _ from 'lodash';
import { isIE } from '../isIE';
import { Graph, Function, Result } from 'agora-graph';

export type AlgMeta = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
  lazy: () => Promise<Function<any>>;
  worker: () => Promise<any>;
};

export type LoadedAlg = {
  selected: boolean;
  id: string;
  name: string;
  reference?: string[];
  algorithm?: Function<any>;
  worker?: {
    algorithm: (graph: Graph) => Promise<Result>;
    terminate: () => void;
  };
};

export function useAlgorithms(selectedAlgs: AlgMeta[]) {
  const [algorithms, setAlgorithms] = useState<LoadedAlg[]>();
  useEffect(() => {
    const loadAlgos = async (alglist: AlgMeta[]) => {
      console.log('algorithms loading start');
      const aggregator = await Promise.all(
        _.map(alglist, async ({ worker, lazy, ...algo }) => {
          if (isIE) {
            return {
              ...algo,
              algorithm: await lazy()
            };
          }

          return {
            ...algo,
            worker: await worker()
          };
        })
      );
      setAlgorithms(aggregator);
      console.log('algorithms loading finish');
    };
    loadAlgos(selectedAlgs);
  }, [selectedAlgs]);
  return algorithms;
}
