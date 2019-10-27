import _ from 'lodash';
import React from 'react';

import { useSelector } from 'react-redux';

import { Flex, NesCheckbox, NesContainer } from '../../layout';
import { setAllCri, toggleCri } from '../../store/actions/criteria-selection';
import {
  allCriteriaAreSelected,
  getGroupedCriteria
} from '../../store/selectors';

import useToggleAll from '../../utils/useToggleAll';
import useToggleCheckBox from '../../utils/useToggleCheckBox';
import { referencesToIndexMap } from '../../store/selectors/references';
import Cite from '../../components/Cite';

export const CriteriaList: React.FC<{
  className?: string;
}> = function({ className }) {
  const areAllCriSelected = useSelector(allCriteriaAreSelected);
  const toggleAllCri = useToggleAll(setAllCri);

  const criteriaGroups = useSelector(getGroupedCriteria);
  const toggle = useToggleCheckBox(toggleCri);
  const references = useSelector(referencesToIndexMap);

  const title = (
    <NesCheckbox
      name="Criterias"
      checked={areAllCriSelected}
      onChange={toggleAllCri}
    />
  );

  return (
    <NesContainer centered className={className} title={title}>
      <Flex column className="items-start tl">
        <div className="overflow-auto w-100" style={{ height: '300px' }}>
          {_.map(criteriaGroups, (group, key) => {
            return (
              <div key={key} className="group mb1">
                <p className="nes-text is-primary">{key}</p>
                <Flex column className="childrens ml4 code">
                  {_.map(group, ({ id, name, selected, reference: ref }) => (
                    <NesCheckbox
                      key={id}
                      name={id}
                      checked={selected}
                      onChange={toggle}
                    >
                      {name + ' '}
                      {ref && <Cite cite={ref} value={references[ref].index} />}
                    </NesCheckbox>
                  ))}
                </Flex>
              </div>
            );
          })}
        </div>
      </Flex>
    </NesContainer>
  );
};
