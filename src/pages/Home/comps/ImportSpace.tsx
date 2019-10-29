import classNames from 'classnames';
import _ from 'lodash';
import React, { MouseEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NesList } from '../../../layout';
import { getExamples } from '../../../store/selectors';
import { downloadThenToggleExampleSelection } from '../../../store/actions/examples-files';

export const ImportSpace: React.FC = function() {
  const dispatch = useDispatch();
  const examplefiles = useSelector(getExamples);
  // const selectedExampleFiles = useSelector(getSelectedExamples);
  const exampleItemClick = useCallback(
    (event: MouseEvent) => {
      dispatch(downloadThenToggleExampleSelection(event.currentTarget.id));
    },
    [dispatch]
  );
  return (
    // <>
    <div className="w-100">
      <h3>Select Files</h3>
      <NesList disc className="overflow-y-scroll h5 mb0 tl w-100 code">
        {_.map(examplefiles, ({ selected, file }) => (
          <li
            key={file}
            id={file}
            className={classNames('f6', 'mr1', 'color-inherit', 'pointer', {
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
    //   <div className="w-100 w-50-l">
    //     <h3>Selected</h3>
    //     <NesList
    //       disc
    //       className="overflow-y-scroll h5 mb0 tl w-100 code"
    //     >
    //       {_(selectedExampleFiles)
    //         .map(({ selected, file }) => (
    //           <li
    //             key={file}
    //             id={file}
    //             className={classNames(
    //               'f6',
    //               'mr1',
    //               'color-inherit',
    //               'hover-error ',
    //               'pointer',
    //               {
    //                 'is-success': selected,
    //                 'nes-text': selected
    //               }
    //             )}
    //             onClick={exampleItemClick}
    //           >
    //             <div className="mr1 truncate">{file}</div>
    //           </li>
    //         ))
    //         .value()}
    //     </NesList>
    //   </div>
    // </>
  );
};
