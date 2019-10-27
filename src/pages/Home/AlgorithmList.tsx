import React, { useMemo } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import {
  areAllAlgorithmSelected,
  getAlgorithmsWithSelection
} from '../../store/selectors';
import { toggleAlg, setAllAlg } from '../../store/actions/algorithm-selection';
import { NesContainer, NesCheckbox, Flex } from '../../layout';
import useToggleAll from '../../utils/useToggleAll';
import useToggleCheckBox from '../../utils/useToggleCheckBox';
import Cite from '../../components/Cite';

export const AlgorithmList: React.FC<{
  className?: string;
}> = function({ className }) {
  const areAllAlgSelected = useSelector(areAllAlgorithmSelected);
  const toggleAllAlg = useToggleAll(setAllAlg);

  const selection = useSelector(getAlgorithmsWithSelection);
  const toggle = useToggleCheckBox(toggleAlg);

  const title = (
    <NesCheckbox
      name="Algorithms"
      checked={areAllAlgSelected}
      onChange={toggleAllAlg}
    />
  );

  const elements = useMemo(
    () =>
      _.map(selection, ({ selected, id, name, reference: ref }) => {
        return (
          <NesCheckbox key={id} name={id} checked={selected} onChange={toggle}>
            {name} {ref && <Cite cite={ref} />}
          </NesCheckbox>
        );
      }),
    [selection, toggle]
  );

  // const half_length = Math.ceil(elements.length / 2);

  return (
    <NesContainer centered className={className} title={title}>
      <Flex column className="items-start">
        {elements}
      </Flex>
    </NesContainer>
  );
};
