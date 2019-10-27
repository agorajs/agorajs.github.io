import { RouteComponentProps, navigate } from '@reach/router';
import { UppyFile } from '@uppy/core';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import { DragDrop } from '@uppy/react';
import classNames from 'classnames';
import _ from 'lodash';
import React, { MouseEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, NesButton, NesList } from '../../layout';
import { addFile, removeFile } from '../../store/actions/file';
import { setAsExample, setAsUpload } from '../../store/actions/is-upload';
import {
  canGenerateEmbeddings,
  getExamples,
  getFiles,
  getSelectedExamples
} from '../../store/selectors';
import { isUpload as isUploadSelector } from '../../store/selectors/isUpload';
import { useConst } from '../../utils/useConst';
import useUppy from '../../utils/useUppy';
import { AlgorithmList } from './AlgorithmList';
import Authors from './Authors';
import { CriteriaList } from './CriteriaList';
import './index.css';
import { ReferenceList } from './ReferenceList';
import { downloadThenToggleExampleSelection } from '../../store/actions/examples-files';
import { promisingFileReader } from '../../utils/promisingFileReader';

const Home: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();

  const uppyListeners = useConst<{
    [k: string]: (result: UppyFile, ...rest: any[]) => any;
  }>(() => ({
    'file-added': result => {
      console.log(result);
      const { id, data } = result;
      promisingFileReader(data as File).then(res =>
        dispatch(addFile({ id, data: res, name: (data as File).name }))
      );
    },
    'restriction-failed': (__, error) => {
      console.log(error);
    }
  }));

  const uppy = useUppy(
    { restrictions: { allowedFileTypes: ['.gml'] } },
    uppyListeners
  );

  const fileList = useSelector(getFiles);
  const fileItemClick = useCallback(
    (event: MouseEvent) => {
      dispatch(removeFile(event.currentTarget.id));
    },
    [dispatch]
  );

  const exampleItemClick = useCallback(
    (event: MouseEvent) => {
      dispatch(downloadThenToggleExampleSelection(event.currentTarget.id));
    },
    [dispatch]
  );

  const examplefiles = useSelector(getExamples);
  const selectedExampleFiles = useSelector(getSelectedExamples);

  const isUpload = useSelector(isUploadSelector);

  const setUpload = useCallback(() => dispatch(setAsUpload()), [dispatch]);
  const setExample = useCallback(() => dispatch(setAsExample()), [dispatch]);

  const generate = useSelector(canGenerateEmbeddings);

  const resultOnClick = useCallback(
    (event: MouseEvent) => {
      generate && navigate('result');
    },
    [generate]
  );

  return (
    <div className="w-100">
      <Authors className="center mw7 mv3" />
      <Flex parent="section" className="mv3">
        <Flex column className="item-stretch pa3 justify-around w5">
          <NesButton primary={isUpload} onClick={setUpload}>
            <div className="pv2">Upload Files</div>
          </NesButton>
          <NesButton primary={!isUpload} onClick={setExample}>
            <div className="pv2">Examples</div>
          </NesButton>
        </Flex>
        <Flex className="w-100">
          {isUpload ? (
            <>
              <div className="w-100">
                <h3 className="tc">Upload</h3>
                {
                  //@ts-ignore
                  <DragDrop uppy={uppy} height="256px" />
                }
              </div>
              {fileList.length > 0 && (
                <div className="tl">
                  <h3 className="tc">&nbsp;</h3>
                  <NesList
                    disc
                    className="overflow-y-scroll h5 mb0 w5 hover-success code"
                  >
                    {_.map(fileList, ({ id, data, name }) => (
                      <li
                        key={id}
                        id={id}
                        className="f6 mr1 hover-error color-inherit"
                        onClick={fileItemClick}
                      >
                        <div className="mr1 truncate">{name}</div>
                      </li>
                    ))}
                  </NesList>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="w-50">
                <h3>Select Files</h3>
                <NesList
                  disc
                  className="overflow-y-scroll h5 mb0 tl w-100 code"
                >
                  {_.map(examplefiles, ({ selected, file }) => (
                    <li
                      key={file}
                      id={file}
                      className={classNames('f6', 'mr1', 'color-inherit', {
                        'hover-success ': !selected,
                        'is-success': selected,
                        'nes-text': selected
                      })}
                      onClick={exampleItemClick}
                    >
                      <div className="mr1 truncate">{file}</div>
                    </li>
                  ))}
                </NesList>
              </div>
              <div className="w-50">
                <h3>Selected</h3>
                <NesList
                  disc
                  className="overflow-y-scroll h5 mb0 tl w-100 code"
                >
                  {_(selectedExampleFiles)
                    .map(({ selected, file }) => (
                      <li
                        key={file}
                        id={file}
                        className={classNames(
                          'f6',
                          'mr1',
                          'color-inherit',
                          'hover-error ',
                          {
                            'is-success': selected,
                            'nes-text': selected
                          }
                        )}
                        onClick={exampleItemClick}
                      >
                        <div className="mr1 truncate">{file}</div>
                      </li>
                    ))
                    .value()}
                </NesList>
              </div>
            </>
          )}
        </Flex>
      </Flex>
      <div className="mv3">
        <NesButton
          primary={generate}
          disabled={!generate}
          onClick={resultOnClick}
        >
          <div className="pa3">Generate Overlap Free Embeddings</div>
        </NesButton>
      </div>
      <Flex>
        <AlgorithmList className="w-50 ma2" />
        <CriteriaList className="pr0 w-50 ma2 " />
      </Flex>
      <ReferenceList className="mv3" />
    </div>
  );
};

export default Home;
