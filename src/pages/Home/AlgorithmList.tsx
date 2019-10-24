import React, { useMemo } from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { allAlgorithms, allAlgorithmsAreSelected } from '../../store/selectors';
import { toggleAlg, setAllAlg } from '../../store/actions/algorithm-selection';
import { NesContainer, NesCheckbox, Flex } from '../../layout';
import useToggleAll from '../../utils/useToggleAll';
import useToggleCheckBox from '../../utils/useToggleCheckBox';

export const AlgorithmList: React.FC<{
  className?: string;
}> = function({ className }) {
  const areAllAlgSelected = useSelector(allAlgorithmsAreSelected);
  const toggleAllAlg = useToggleAll(setAllAlg);

  const selection = useSelector(allAlgorithms);
  const toggle = useToggleCheckBox(toggleAlg);

  const referenceMap: { [k: string]: number } = {
    PFS: 17,
    "PFS'": 9,
    FTA: 12,
    VPSC: 4,
    PRISM: 6,
    GTREE: 18,
    'RWordle-L': 19,
    Diamond: 16
  };

  const title = (
    <NesCheckbox
      name="Algorithms"
      checked={areAllAlgSelected}
      onChange={toggleAllAlg}
    />
  );

  const elements = useMemo(
    () =>
      _.map(selection, (checked, name) => (
        <NesCheckbox key={name} name={name} checked={checked} onChange={toggle}>
          {name}{' '}
          {referenceMap[name] && (
            <Cite cite={name} value={referenceMap[name]} />
          )}
        </NesCheckbox>
      )),
    [selection, toggle]
  );

  const half_length = Math.ceil(elements.length / 2);

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
