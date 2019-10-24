import React, { useCallback, useState, MouseEvent, Children } from 'react';
import _ from 'lodash';
import './index.css';

import { DragDrop } from '@uppy/react';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import '@uppy/dashboard/dist/style.css';

import useUppy from '../../utils/useUppy';

import { useSelector, useDispatch } from 'react-redux';

import { files } from '../../store/selectors';
import { UppyFile } from '@uppy/core';
import { addFile, removeFile } from '../../store/actions/file';
import { Flex, NesList, NesBalloon } from '../../layout';
import { CriteriaList } from './CriteriaList';
import { AlgorithmList } from './AlgorithmList';
import classNames from 'classnames';

const Home: React.FC = () => {
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

  const [isUpload, setUpload] = useState(true);

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

  const examplefiles = {
    'b100.gml': false,
    'b102.gml': false,
    'b124.gml': false,
    'b143.gml': false,
    'badvoro.gml': true,
    'dpd.gml': false,
    'mode.gml': false,
    'NaN.gml': false,
    'ngk10_4.gml': true,
    'root.gml': false,
    'rowe.gml': false,
    'size.gml': false,
    'unix.gml': false,
    'xx.gml': false
  };

  return (
    <div className="mw8 center mt4 tc">
      <h1 className="lh-title tc">AGORA</h1>
      <Flex parent="section" auto className="items-end justify-center w-100">
        <NesBalloon right className="mw7">
          <p>
            Algorithm Graph Overlap Removal Algorithms: Fati Chen, Arnaud
            Sallaberry, Laurent Piccinini, Pascal Poncelet.{' '}
            <a
              href="https://arxiv.org/abs/1908.07363"
              target="_blank"
              rel="noopener noreferrer"
            >
              [arXiv:1908.07363]
            </a>
          </p>
        </NesBalloon>
        {/* <i className="nes-pokeball"></i> */}
      </Flex>
      <Flex parent="section">
        <Flex column className="item-stretch pa3 justify-around w5">
          <button
            className={classNames('nes-btn', { 'is-primary': isUpload })}
            onClick={() => setUpload(true)}
          >
            <div className="pv2">Upload Files</div>
          </button>
          <button
            className={classNames('nes-btn', { 'is-primary': !isUpload })}
            onClick={() => setUpload(false)}
          >
            <div className="pv2">Examples</div>
          </button>
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
                    className="overflow-y-scroll h5 mb0 w5 hover-success"
                  >
                    {_.map(fileList, ({ id, data: { name } }) => (
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
                <NesList disc className="overflow-y-scroll h5 mb0 tl w-100">
                  {_.map(examplefiles, (value, name) => (
                    <li
                      key={name}
                      id={name}
                      className={classNames('f6', 'mr1', 'color-inherit', {
                        'hover-success ': !value,
                        'is-success': value,
                        'nes-text': value
                      })}
                      onClick={fileItemClick}
                    >
                      <div className="mr1 truncate">{name}</div>
                    </li>
                  ))}
                </NesList>
              </div>
              <div className="w-50">
                <h3>Selected</h3>
                <NesList disc className="overflow-y-scroll h5 mb0 tl w-100">
                  {_(examplefiles)
                    .pickBy(value => value)
                    .map((value, name) => (
                      <li
                        key={name}
                        id={name}
                        className={classNames(
                          'f6',
                          'mr1',
                          'color-inherit',
                          'hover-error ',
                          {
                            'is-success': value,
                            'nes-text': value
                          }
                        )}
                        onClick={fileItemClick}
                      >
                        <div className="mr1 truncate">{name}</div>
                      </li>
                    ))
                    .value()}
                </NesList>
              </div>
            </>
          )}
        </Flex>
      </Flex>
      <div className="pa3">
        <button className="nes-btn is-primary">
          <div className="pa3">Generate Embeddings</div>
        </button>
      </div>
      <Flex>
        <AlgorithmList className="w-50 ma2" />
        <CriteriaList className="pr0 w-50 ma2 " />
      </Flex>
      <section className="tl">
        <h3 className="tc">References</h3>
        <Reference
          id="PFS"
          number={17}
          title="Layout adjustment and the mental map."
          authors="K. Misue, P. Eades, W. Lai, and K. Sugiyama."
        >
          <i>Journal of Visual Languages &amp; Computing</i>, 6(2):183–210,
          1995.
        </Reference>

        <Reference
          id="PFS'"
          number={9}
          title="A layout adjustment problem for disjoint rectangles preserving
          orthogonal order."
          authors="K. Hayashi, M. Inoue, T. Masuzawa, and H. Fujiwara."
        >
          In{' '}
          <i>
            Proceedings of the International Symposium on Graph Drawing (GD)
          </i>
          , pages 183–197. Springer, 1998
        </Reference>
        <Reference
          id="FTA"
          number={12}
          title="A new algorithm for re-moving node overlapping in graph visualization."
          authors="X. Huang, W. Lai, A. Sajeev, and J. Gao."
        >
          <i>Information Sciences</i>, 177(14):2821–2844, 2007.
        </Reference>
        <Reference
          id="VPSC"
          number={4}
          title="Fast node overlap removal."
          authors="T. Dwyer, K. Marriott, and P. J. Stuckey."
        >
          In{' '}
          <i>
            Proceedings of the International Symposium on Graph Drawing (GD)
          </i>
          , pages 153–164. Springer, 2005.
        </Reference>
        <Reference
          id="PRISM"
          number={6}
          title="Efficient, proximity-preserving node overlap removal."
          authors="E. Gansner and Y. Hu."
        >
          <i>Journal of Graph Algorithms and Applications</i>, 14(1):53–74,
          2010.
        </Reference>
        <Reference
          id="RWordle-L"
          number={19}
          title="Rolled-out wordles: A heuristic method for overlap removal of 2d data representatives."
          authors="H. Strobelt, M. Spicker, A. Stoffel, D. Keim, and O. Deussen."
        >
          <i>Computer Graphics Forum</i>, 31(3):1135–1144, 2012.
        </Reference>
        <Reference
          id="GTREE"
          number={18}
          title="Node overlap removal by growing a tree"
          authors="L. Nachmanson, A. Nocaj, S. Bereg, L. Zhang, and A. Holroyd."
        >
          In{' '}
          <i>
            Proceedings of the International Symposium on Graph Drawing and
            Network Visualization (GD)
          </i>
          , pages 33–43. Springer, 2016
        </Reference>
        <Reference
          id="Diamond"
          number={16}
          title="Efficient optimal overlap removal."
          authors="W. Meulemans."
        >
          <i>Computer Graphics Forum</i>, 38(3):713–723, 2019.
        </Reference>
      </section>
      <Flex parent="footer" className="justify-around pv3">
        <LogoLink
          link="https://www.lirmm.fr/"
          imageurl="lirmm.png"
          alt="LIRMM"
        />
        <LogoLink
          link="https://www.univ-montp3.fr/"
          imageurl="um3.png"
          alt="UM3"
        />
        <LogoLink
          link="https://www.umontpellier.fr/"
          imageurl="um.png"
          alt="UM"
        />
        <LogoLink link="https://www.cnrs.fr/" imageurl="cnrs.png" alt="CNRS" />
      </Flex>
    </div>
  );
};

const Reference: React.FC<{
  id: string;
  number: number;
  authors: string;
  title: string;
}> = React.memo(({ id, number, authors, title, children }) => {
  return (
    <p id={'ref:' + id} className="code">
      <span>[{number}]</span> {authors}{' '}
      <span className="nes-text is-primary">{title}</span> {children}
    </p>
  );
});

const LogoLink: React.FC<{
  link: string;
  imageurl: string;
  alt: string;
}> = React.memo(({ link, imageurl, alt }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img height="64px" src={imageurl} alt={alt} />
    </a>
  );
});

export default Home;
