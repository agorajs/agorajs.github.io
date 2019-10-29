import { useState, useEffect } from 'react';
import { CriterionType } from '../../../store/types';
import { CriType } from '../index';

export function useCriteria(selectedCri: CriterionType[]) {
  const [criteria, setCriteria] = useState<CriType[]>();
  useEffect(() => {
    const load = async (criList: CriterionType[]) => {
      console.log('criteria loading start');
      const aggregator = [];
      for (const { lazy, ...info } of criList) {
        aggregator.push({
          ...info,
          criterion: (await lazy()).criteria
        });
      }
      setCriteria(aggregator);
      console.log('criteria loading finish');
      // finished loading cri, parsing first file
    };
    load(selectedCri);
  }, [selectedCri]);
  return criteria;
}
