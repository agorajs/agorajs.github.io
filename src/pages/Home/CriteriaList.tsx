import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { allCriteriasAreSelected } from '../../store/selectors';
import { setAllCri } from '../../store/actions/criteria-selection';
import { NesContainer, NesCheckbox, Flex } from '../../layout';
import useToggleAll from '../../utils/useToggleAll';
// import useToggleCheckBox from '../../utils/useToggleCheckBox';

export const CriteriaList: React.FC<{
  className?: string;
}> = ({ className }) => {
  const areAllCriSelected = useSelector(allCriteriasAreSelected);
  const toggleAllCri = useToggleAll(setAllCri);

  // const selection = useSelector(allCriterias);
  // const toggle = useToggleCheckBox(toggleCri);

  const title = (
    <NesCheckbox
      name="Criterias"
      checked={areAllCriSelected}
      onChange={toggleAllCri}
    />
  );

  const criteriaGroups = {
    'Orthogonal Ordering': {
      'Original [17]': false,
      "Kendall's Tau Distance [12]": false,
      'Number of Inversions [19]': false,
      'Normalised Number of Inversions': true
    },
    'Spread Minimisation': {
      'Bounding Box L1 Length [13]': false,
      'Bounding Box Area [17]': false,
      'Bounding Box Normalised Area [12]': false,
      'Convex Hull Area [19]': true
    },
    'Global Shape Preservation': {
      'Bounding Box Aspect Ratio': false,
      'Bounding Box Improved Aspect Ratio': true,
      'Convex Hull Standard Deviation': false
    },
    'Node Movement Minimisation': {
      'Moved Nodes': false,
      'Distance Moved Mean Euclidean': false,
      'Distance Moved Normalised Euclidean': false,
      'Distance Moved Hamiltonian': false,
      'Distance Moved Improved Mean Squared Euclidean': true,
      Displacement: false,
      'K-Nearest Neighbours': false
    },
    'Edge Lenght Preservation': {
      Ratio: false,
      'Relative Standard Deviation Delaunay': true
    }
  };

  // const elements = useMemo(
  //   () =>
  //     _.map(selection, (checked, name) => (
  //       <NesCheckbox
  //         key={name}
  //         name={name}
  //         checked={checked}
  //         onChange={toggle}
  //       />
  //     )),
  //   [selection, toggle]
  // );
  // const half_length = Math.ceil(elements.length / 2);

  return (
    <NesContainer centered className={className} title={title}>
      <Flex column className="items-start tl">
        <div className="overflow-auto" style={{ height: '300px' }}>
          {_.map(criteriaGroups, (group, key) => {
            return (
              <div key={key} className="group mb1">
                <p className="nes-text is-primary">{key}</p>
                <Flex column className="childrens ml4 code">
                  {_.map(group, (checked, name) => (
                    <NesCheckbox
                      key={key + name}
                      name={name}
                      checked={checked}
                      onChange={() => null}
                    />
                  ))}
                </Flex>
              </div>
            );
          })}
        </div>
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
