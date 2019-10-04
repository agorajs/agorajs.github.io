import React, { useCallback, ChangeEvent, useMemo, useState } from 'react';
import _ from 'lodash';
import './App.css';

import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import useUppy from './utils/useUppy';
import { useSelector, useDispatch } from 'react-redux';
import {
  allAlgorithms,
  allAlgorithmsAreSelected,
  allCriterias,
  allCriteriasAreSelected
} from './store/selectors';
import { toggleAlg, setAllAlg } from './store/actions/algorithm-selection';
import { toggleCri, setAllCri } from './store/actions/criteria-selection';
import { PayloadAC } from 'typesafe-actions';
import { UppyFile } from '@uppy/core';

const App: React.FC = () => {
  const [uppyListeners] = useState<{
    [k: string]: (result: UppyFile, ...rest: any[]) => any;
  }>({
    'file-added': result => {
      console.log(result);
    },
    'restriction-failed': (file, error) => {
      console.log(error);
    }
  });
  const uppy = useUppy(
    { restrictions: { allowedFileTypes: ['.gml'] } },
    uppyListeners
  );

  const areAllCriSelected = useSelector(allCriteriasAreSelected);

  const toggleAllCri = useToggleAll(setAllCri);

  const areAllAlgSelected = useSelector(allAlgorithmsAreSelected);

  const toggleAllAlg = useToggleAll(setAllAlg);

  return (
    <div className="mw8 center mt4 tc">
      <h1 className="lh-title tc">AGORAjs</h1>
      <section className="flex flex-auto items-end justify-center w-100">
        <div className="mw7 nes-balloon from-right">
          <p>
            Algorithm Graph Overlap Removal Algorithms: Lorem ipsum dolor sit
            amet consectetur, adipisicing elit.
          </p>
        </div>
        <i className="nes-pokeball"></i>
      </section>
      {
        //@ts-ignore
        <DragDrop uppy={uppy} height="256px" />
      }
      <div className="pt1 tl">
        <ul className="nes-list is-disc overflow-x-scroll nowrap">
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
        </ul>
      </div>
      <div className="pa3">
        <button className="nes-btn is-primary">
          <div className="pa3">Generate Graphs</div>
        </button>
      </div>
      <div className="flex ">
        <div className="nes-container with-title w-50 is-centered ma2">
          <p className="title">
            <Checkbox
              name="Algorithms"
              checked={areAllAlgSelected}
              onChange={toggleAllAlg}
            />
          </p>
          <AlgorithmCheckboxList />
        </div>
        <div className="nes-container with-title w-50 is-centered ma2">
          <p className="title">
            <Checkbox
              name="Criterias"
              checked={areAllCriSelected}
              onChange={toggleAllCri}
            />
          </p>
          <CriteriaChoiceList />
        </div>
      </div>
    </div>
  );
};

export default App;

const CriteriaChoiceList: React.FC = function() {
  const selection = useSelector(allCriterias);

  const toggle = useToggleCheckBox(toggleCri);
  const list = useMemo(
    () =>
      twoColumn(
        _.map(selection, (checked, name) => (
          <Checkbox
            key={name}
            name={name}
            checked={checked}
            onChange={toggle}
          />
        ))
      ),
    [selection, toggle]
  );
  return list;
};

const AlgorithmCheckboxList: React.FC = function() {
  const selection = useSelector(allAlgorithms);

  const toggle = useToggleCheckBox(toggleAlg);

  const list = useMemo(
    () =>
      twoColumn(
        _.map(selection, (checked, name) => (
          <Checkbox
            key={name}
            name={name}
            checked={checked}
            onChange={toggle}
          />
        ))
      ),
    [selection, toggle]
  );

  return list;
};

const twoColumn = function(elements: JSX.Element[], maxColumn = 5) {
  if (elements.length > maxColumn) {
    const half_length = Math.ceil(elements.length / 2);
    return (
      <div className="flex items-start">
        <div className="w-50 flex flex-column items-start">
          {_.slice(elements, 0, half_length)}
        </div>
        <div className="w-50 flex flex-column items-start">
          {_.slice(elements, half_length)}
        </div>
      </div>
    );
  }
  return <div className="flex flex-column items-start">{elements}</div>;
};

const Checkbox: React.FC<{
  name: string;
  checked: boolean;
  onChange: any;
}> = ({ name, checked, onChange }) => {
  return (
    <label>
      <input
        name={name}
        type="checkbox"
        className="nes-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span>{name}</span>
    </label>
  );
};

function useToggleAll(setAll: PayloadAC<string, boolean>) {
  const dispatch = useDispatch();
  const toggleAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setAll(event.target.checked));
    },
    [dispatch, setAll]
  );
  return toggleAll;
}

function useToggleCheckBox(toggle: PayloadAC<string, string>) {
  const dispatch = useDispatch();
  return useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(toggle(event.target.name));
    },
    [dispatch, toggle]
  );
}
