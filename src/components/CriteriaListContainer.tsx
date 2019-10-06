import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { allCriterias, allCriteriasAreSelected } from '../store/selectors';
import { toggleCri, setAllCri } from '../store/actions/criteria-selection';
import { NesContainer, NesCheckbox, Flex } from '../layout';
import useToggleAll from '../utils/useToggleAll';
import useToggleCheckBox from '../utils/useToggleCheckBox';

export const CriteriaListContainer: React.FC<{
  className?: string;
}> = ({ className }) => {
  const areAllCriSelected = useSelector(allCriteriasAreSelected);
  const toggleAllCri = useToggleAll(setAllCri);

  const selection = useSelector(allCriterias);
  const toggle = useToggleCheckBox(toggleCri);

  const title = (
    <NesCheckbox
      name="Criterias"
      checked={areAllCriSelected}
      onChange={toggleAllCri}
    />
  );
  const elements = _.map(selection, (checked, name) => (
    <NesCheckbox key={name} name={name} checked={checked} onChange={toggle} />
  ));
  // const half_length = Math.ceil(elements.length / 2);

  return (
    <NesContainer centered className={className} title={title}>
      <Flex column className="items-start">
        {elements}
      </Flex>
      {/* <Flex className="items-start">
        <Flex column className="w-50 items-start">
          {_.slice(elements, 0, half_length)}
        </Flex>
        <Flex column className="w-50 items-start">
          {_.slice(elements, half_length)}
        </Flex>
      </Flex> */}
    </NesContainer>
  );
};
