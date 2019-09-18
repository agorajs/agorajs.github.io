import React, {
  SVGProps,
  useRef,
  useEffect,
  useState,
  useCallback
} from 'react';
import SVGGraph from './SVGGraph';
import { crop, Graph, Algorithm } from 'agora-graph';
import DownloadLink from './DownloadLink';

export const AlgorithmRepresentation: React.FC<
  {
    algorithm: Algorithm<any>;
    initial: Graph;
    width?: number;
    height?: number;
    over?: boolean;
  } & SVGProps<SVGSVGElement>
> = function({
  algorithm: { name, algorithm },
  initial,
  className,
  width: pWidth,
  height: pHeight
}) {
  const [SVGContent, setSVGContent] = useState<string | null>(null);
  const [graph, setGraph] = useState<Graph | null>(null);

  const [width, setWidth] = useState(pWidth);
  const [height, setHeight] = useState(pHeight);

  const measuredRef = useCallback(
    node => {
      if (node !== null) {
        if (!pHeight) setHeight(node.getBoundingClientRect().height);
        if (!pWidth) setWidth(node.getBoundingClientRect().width);
      }
    },
    [pWidth, pHeight]
  );

  // calling async set
  useEffect(() => {
    const copy = {
      nodes: initial.nodes.map(n => ({ ...n })),
      edges: initial.edges.map(e => ({ ...e }))
    };
    setGraph(crop(algorithm(copy).graph));
  }, [algorithm, initial]);

  const svgRef = useCallback(
    svgRef => {
      if (svgRef) {
        const serializer = new XMLSerializer();
        setSVGContent(serializer.serializeToString(svgRef));
      }
    },
    [graph]
  );

  return (
    <div className={'graph ' + className}>
      <h2 className="title">{name}</h2>
      <DownloadLinks
        name={name}
        json={JSON.stringify(graph)}
        svg={SVGContent}
      />
      <div className="graph w-100 h-100 ma1" ref={measuredRef}>
        {graph && height && width ? (
          <SVGGraph
            graph={graph}
            height={height}
            width={width}
            svgRef={svgRef}
          />
        ) : (
          'loading'
        )}
      </div>
    </div>
  );
};

export default AlgorithmRepresentation;
export const InitialRepresentation: React.FC<
  {
    title: string;
    graph: Graph;
    fileContent: string;
    width?: number;
    height?: number;
    over?: boolean;
  } & SVGProps<SVGSVGElement>
> = function({
  title,
  graph,
  fileContent,
  className,
  width: pWidth,
  height: pHeight,
  ...rest
}) {
  const svgRef = useCallback(
    svgRef => {
      if (svgRef) {
        const serializer = new XMLSerializer();
        setSVGContent(serializer.serializeToString(svgRef));
      }
    },
    [graph]
  );
  const [SVGContent, setSVGContent] = useState<string | null>(null);

  const [width, setWidth] = useState(pWidth);
  const [height, setHeight] = useState(pHeight);

  const measuredRef = useCallback(
    node => {
      if (node !== null) {
        if (!pHeight) setHeight(node.getBoundingClientRect().height);
        if (!pWidth) setWidth(node.getBoundingClientRect().width);
      }
    },
    [pWidth, pHeight]
  );

  return (
    <div className={'initial-graph ' + className}>
      <h2 className="title">{title}</h2>
      <DownloadLinks
        name={title}
        gml={fileContent}
        json={JSON.stringify(graph)}
        svg={SVGContent}
      />
      <div className="graph w-100 h-100 ma1" ref={measuredRef}>
        {height && width ? (
          <SVGGraph
            graph={graph}
            width={width}
            height={height}
            // {...rest}
            svgRef={svgRef}
          />
        ) : null}
      </div>
    </div>
  );
};

const DownloadLinks: React.FC<{
  name: string;
  gml?: string;
  json: string;
  svg?: string | null;
}> = function({ name, gml, json, svg }) {
  return (
    <div>
      {gml ? (
        <DownloadLink content={gml} name={name + '.gml'}>
          GML
        </DownloadLink>
      ) : null}
      <DownloadLink content={json} name={name + '.json'}>
        JSON
      </DownloadLink>
      {svg ? (
        <DownloadLink content={svg} name={name + '.svg'}>
          SVG
        </DownloadLink>
      ) : null}
    </div>
  );
};
