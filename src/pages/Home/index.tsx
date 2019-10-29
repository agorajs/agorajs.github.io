import { RouteComponentProps, navigate } from '@reach/router';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import React, { MouseEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, NesButton } from '../../layout';
import { setAsExample, setAsUpload } from '../../store/actions/is-upload';
import {
  canGenerateEmbeddings // getSelectedExamples
} from '../../store/selectors';
import { isUpload as isUploadSelector } from '../../store/selectors/isUpload';
import { AlgorithmList } from './comps/AlgorithmList';
import Authors from './comps/Authors';
import { CriteriaList } from './comps/CriteriaList';
import './index.css';
import { ReferenceList } from './comps/ReferenceList';
import { ImportSpace } from './comps/ImportSpace';
import { UploadSpace } from './comps/UploadSpace';

const Home: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();

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
    <div className="mw8-ml center">
      <div className="mh1 mh3-m mh0-l">
        <Authors className="center mw7 mv3" />
        <Flex parent="section" className="flex-column flex-row-l mv3">
          <Flex className="flex-row flex-column-l w-100 item-stretch pa3 justify-around w5-l">
            <NesButton primary={isUpload} onClick={setUpload}>
              <div className="">Upload Files</div>
            </NesButton>
            <NesButton primary={!isUpload} onClick={setExample}>
              <div className="">Examples</div>
            </NesButton>
          </Flex>

          {isUpload ? <UploadSpace /> : <ImportSpace />}
        </Flex>
        <div className="mv3">
          <NesButton
            primary={generate}
            disabled={!generate}
            onClick={resultOnClick}
          >
            <div className="pa3"> Generate Overlapping-free Embeddings</div>
          </NesButton>
        </div>
        <Flex wrap>
          <div className="w-100 w-50-l mb3 mb0-l">
            <AlgorithmList className="h-100 ma2" />
          </div>
          <div className="w-100 w-50-l">
            <CriteriaList className="h-100 pr0 ma2" />
          </div>
        </Flex>
        <ReferenceList className="mv3" />
      </div>
    </div>
  );
};

export default Home;
