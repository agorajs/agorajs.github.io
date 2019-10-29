import { UppyFile } from '@uppy/core';
import { DragDrop } from '@uppy/react';
import _ from 'lodash';
import React, { MouseEvent, useCallback, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, NesList } from '../../../layout';
import { addFile, removeFile } from '../../../store/actions/file';
import { getFiles } from '../../../store/selectors';
import useUppy from '../../../utils/useUppy';
import { promisingFileReader } from '../../../utils/promisingFileReader';

const configuration = { restrictions: { allowedFileTypes: ['.gml'] } };

const setListeners: (
  dispatch: Dispatch<any>
) => {
  [k: string]: (result: UppyFile, ...rest: any[]) => any;
} = dispatch => ({
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
});

export const UploadSpace: React.FC = function() {
  const dispatch = useDispatch();

  const uppy = useUppy(configuration, setListeners(dispatch));

  const fileList = useSelector(getFiles);

  const fileItemClick = useCallback(
    (event: MouseEvent) => {
      dispatch(removeFile(event.currentTarget.id));
    },
    [dispatch]
  );

  return (
    <Flex className="w-100">
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
            {_.map(fileList, ({ id, name }) => (
              <li
                key={id}
                id={id}
                className="f6 mr1 hover-error color-inherit pointer"
                onClick={fileItemClick}
              >
                <div className="mr1 truncate">{name}</div>
              </li>
            ))}
          </NesList>
        </div>
      )}
    </Flex>
  );
};
