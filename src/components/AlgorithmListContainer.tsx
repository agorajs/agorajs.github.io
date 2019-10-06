import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { allAlgorithms, allAlgorithmsAreSelected } from '../store/selectors';
import { toggleAlg, setAllAlg } from '../store/actions/algorithm-selection';
import { NesContainer, NesCheckbox, Flex } from '../layout';
import useToggleAll from '../utils/useToggleAll';
import useToggleCheckBox from '../utils/useToggleCheckBox';

export const AlgorithmListContainer: React.FC<{
  className?: string;
}> = function({ className }) {
  const areAllAlgSelected = useSelector(allAlgorithmsAreSelected);
  const toggleAllAlg = useToggleAll(setAllAlg);

  const selection = useSelector(allAlgorithms);
  const toggle = useToggleCheckBox(toggleAlg);

  const title = (
    <NesCheckbox
      name="Algorithms"
      checked={areAllAlgSelected}
      onChange={toggleAllAlg}
    />
  );

  const elements = _.map(selection, (checked, name) => (
    <NesCheckbox key={name} name={name} checked={checked} onChange={toggle} />
  ));

  const half_length = Math.ceil(elements.length / 2);

  return (
    <NesContainer centered className={className} title={title}>
      <Flex className="items-start">
        <Flex column className="w-50 items-start">
          {_.slice(elements, 0, half_length)}
        </Flex>
        <Flex column className="w-50 items-start">
          {_.slice(elements, half_length)}
        </Flex>
      </Flex>
    </NesContainer>
  );
};
