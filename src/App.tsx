import React, { useCallback, ChangeEvent } from 'react';
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
import {
  selectAllAlg,
  unselectAllAlg,
  toggleAlg
} from './store/actions/algorithm-selection';
import {
  toggleCri,
  selectAllCri,
  unselectAllCri
} from './store/actions/criteria-selection';

const App: React.FC = () => {
  const uppy = useUppy(
    { restrictions: { allowedFileTypes: ['.gml'] } },
    {
      'file-added': result => {
        console.log(result);
      },
      'restriction-failed': (file, error) => {
        console.log(error);
      }
    }
  );

  return (
    <div className="mw8 center mt4 tc">
      <h1 className="lh-title tc">
        AGORAjs
        {/* A<span className="f4 nes-text is-disabled">utomatic </span>G
        <span className="f4 nes-text is-disabled">raph </span>O
        <span className="f4 nes-text is-disabled">verlap </span>R
        <span className="f4 nes-text is-disabled">emoval </span>A
        <span className="f4 nes-text is-disabled">lgorithms </span>js */}
      </h1>
      <section className="flex items-end justify-center w-100">
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
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
          <li className="f6 di mr4">pa_100_10.gml</li>
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
          <p className="title"> Algorithms</p>
          <div className="flex flex-column items-start">
            <AlgorithmChoiceList />
          </div>
        </div>
        <div className="nes-container with-title w-50 is-centered ma2">
          <p className="title">Criterias</p>
          <div className="flex items-start">
            <div className="w-50 flex flex-column items-start">
              <CriteriaChoiceList />
            </div>
            <div className="w-50 flex flex-column items-start">
              {/* <Checkbox title="c" />
              <Checkbox title="d" />
              <Checkbox title="e" />
              <Checkbox title="a" />
              <Checkbox title="a" />
              <Checkbox title="b" />
              <Checkbox title="c" />
              <Checkbox title="d" />
              <Checkbox title="e" />
              <Checkbox title="a" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const CriteriaChoiceList: React.FC = function() {
  const dispatch = useDispatch();

  const selection = useSelector(allCriterias);
  const areAllSelected = useSelector(allCriteriasAreSelected);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(toggleCri(event.target.name));
    },
    [dispatch]
  );

  const toggleAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) dispatch(selectAllCri());
      else dispatch(unselectAllCri());
    },
    [dispatch]
  );

  return (
    <>
      <label>
        <input
          name="all"
          type="checkbox"
          className="nes-checkbox"
          onChange={toggleAll}
          checked={areAllSelected}
        />
        <span>All</span>
      </label>
      {_.map(selection, (checked, name) => (
        <label key={name}>
          <input
            name={name}
            type="checkbox"
            className="nes-checkbox"
            onChange={handleInputChange}
            checked={checked}
          />
          <span>{name}</span>
        </label>
      ))}
    </>
  );
};

const AlgorithmChoiceList: React.FC = function() {
  const dispatch = useDispatch();

  const selection = useSelector(allAlgorithms);
  const areAllSelected = useSelector(allAlgorithmsAreSelected);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(toggleAlg(event.target.name));
    },
    [dispatch]
  );

  const toggleAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) dispatch(selectAllAlg());
      else dispatch(unselectAllAlg());
    },
    [dispatch]
  );

  return (
    <>
      <label>
        <input
          name="all"
          type="checkbox"
          className="nes-checkbox"
          onChange={toggleAll}
          checked={areAllSelected}
        />
        <span>All</span>
      </label>
      {_.map(selection, (checked, name) => (
        <label key={name}>
          <input
            name={name}
            type="checkbox"
            className="nes-checkbox"
            onChange={handleInputChange}
            checked={checked}
          />
          <span>{name}</span>
        </label>
      ))}
    </>
  );
};
