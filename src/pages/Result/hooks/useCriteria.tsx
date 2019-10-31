import { useState, useEffect } from 'react';
import { CriterionType } from '../../../store/types';
import _ from 'lodash';
import { CriType } from '../SingleResult';

export function useCriteria(selectedCri: CriterionType[]) {
  const [criteria, setCriteria] = useState<CriType[]>();
  useEffect(() => {
    const load = async (criList: CriterionType[]) => {
      console.log('criteria loading start');
      const aggregator = await Promise.all(
        _.map(criList, async ({ lazy, ...info }) => ({
          ...info,
          criterion: (await lazy()).criteria
        }))
      );
      setCriteria(aggregator);
      console.log('criteria loading finish');
      // finished loading cri, parsing first file
    };
    load(selectedCri);
  }, [selectedCri]);
  return criteria;
}
