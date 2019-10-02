import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';

import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import useUppy from './utils/useUppy';

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

  const Checkbox: React.FC<{ title: string; checked?: boolean }> = ({
    title,
    checked = true
  }) => {
    const [el, value] = useCheckbox(title, checked);
    return el;
  };

  return (
    // <Provider store={store}>
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
            <Checkbox title="All" />
            <Checkbox title="Scale" />
            <Checkbox title="FTA" />
            <Checkbox title="PFS" />
            <Checkbox title="PFS'" />
            <Checkbox title="GTREE" />
            <Checkbox title="PRISM" />
            <Checkbox title="DIAMOND" />
          </div>
        </div>
        <div className="nes-container with-title w-50 is-centered ma2">
          <p className="title">Criterias</p>
          <div className="flex items-start">
            <div className="w-50 flex flex-column items-start">
              <Checkbox title="a" />
              <Checkbox title="b" />
              <Checkbox title="c" />
              <Checkbox title="d" />
              <Checkbox title="e" />
              <Checkbox title="a" />
              <Checkbox title="a" />
              <Checkbox title="b" />
            </div>
            <div className="w-50 flex flex-column items-start">
              <Checkbox title="c" />
              <Checkbox title="d" />
              <Checkbox title="e" />
              <Checkbox title="a" />
              <Checkbox title="a" />
              <Checkbox title="b" />
              <Checkbox title="c" />
              <Checkbox title="d" />
              <Checkbox title="e" />
              <Checkbox title="a" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Provider>
  );
};

function useCheckbox(
  title: string,
  checked: boolean = true
): [JSX.Element, boolean] {
  const [checkbox, setCheckbox] = useState(checked);

  const handleInputChange = (event: any) => {
    setCheckbox(checkbox => !checkbox);
  };

  return [
    <label>
      <input
        type="checkbox"
        className="nes-checkbox"
        checked={checkbox}
        onChange={handleInputChange}
      />
      <span>{title}</span>
    </label>,
    checkbox
  ];
}

export default App;
