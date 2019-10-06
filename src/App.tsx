import React, { useCallback, useState, MouseEvent } from 'react';
import _ from 'lodash';
import './App.css';

import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import useUppy from './utils/useUppy';

import { useSelector, useDispatch } from 'react-redux';

import { files } from './store/selectors';
import { UppyFile } from '@uppy/core';
import { addFile, removeFile } from './store/actions/file';
import { Flex, NesList, NesBalloon } from './layout';
import { CriteriaListContainer } from './components/CriteriaListContainer';
import { AlgorithmListContainer } from './components/AlgorithmListContainer';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [uppyListeners] = useState<{
    [k: string]: (result: UppyFile, ...rest: any[]) => any;
  }>(() => ({
    'file-added': result => {
      console.log(result);
      const { id, data } = result;
      dispatch(addFile({ id, data: data as File }));
    },
    'restriction-failed': (__, error) => {
      console.log(error);
    }
  }));

  const uppy = useUppy(
    { restrictions: { allowedFileTypes: ['.gml'] } },
    uppyListeners
  );

  const fileList = useSelector(files);
  const fileItemClick = useCallback(
    (event: MouseEvent) => {
      dispatch(removeFile(event.currentTarget.id));
    },
    [dispatch]
  );

  return (
    <div className="mw8 center mt4 tc">
      <h1 className="lh-title tc">AGORAjs</h1>
      <Flex parent="section" auto className="items-end justify-center w-100">
        <NesBalloon right className="mw7">
          <p>
            Algorithm Graph Overlap Removal Algorithms: Fati Chen, Arnaud
            Sallaberry, Laurent Piccinini, Pascal Poncelet.
          </p>
        </NesBalloon>
        <i className="nes-pokeball"></i>
      </Flex>
      {
        //@ts-ignore
        <DragDrop uppy={uppy} height="256px" />
      }
      {fileList.length > 0 ? (
        <div className="pt1 tl">
          <NesList disc className="overflow-x-scroll nowrap">
            {_.map(fileList, ({ id, data: { name } }) => (
              <li
                key={id}
                id={id}
                className="f6 di mr4"
                onClick={fileItemClick}
              >
                {name}
              </li>
            ))}
          </NesList>
        </div>
      ) : null}
      <div className="pa3">
        <button className="nes-btn is-primary">
          <div className="pa3">Generate Graphs</div>
        </button>
      </div>
      <Flex>
        <AlgorithmListContainer className="w-50 ma2" />
        <CriteriaListContainer className="w-50 ma2" />
      </Flex>
      footer
    </div>
  );
};

export default App;
