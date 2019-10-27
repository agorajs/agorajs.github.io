import React, { useMemo } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import {
  areAllAlgorithmSelected,
  getAlgorithmsWithSelection,
  referencesToIndexMap
} from '../../store/selectors';
import { toggleAlg, setAllAlg } from '../../store/actions/algorithm-selection';
import { NesContainer, NesCheckbox, Flex } from '../../layout';
import useToggleAll from '../../utils/useToggleAll';
import useToggleCheckBox from '../../utils/useToggleCheckBox';

export const AlgorithmList: React.FC<{
  className?: string;
}> = function({ className }) {
  const areAllAlgSelected = useSelector(areAllAlgorithmSelected);
  const toggleAllAlg = useToggleAll(setAllAlg);

  const selection = useSelector(getAlgorithmsWithSelection);
  const toggle = useToggleCheckBox(toggleAlg);

  const references = useSelector(referencesToIndexMap);

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
            {name} {ref && <Cite cite={ref} value={references[ref].index} />}
          </NesCheckbox>
        );
      }),
    [selection, toggle, references]
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

const Cite: React.FC<{ cite: string; value: number }> = React.memo(
  ({ cite, value }) => <a href={'#ref:' + cite}>[{value}]</a>
);
