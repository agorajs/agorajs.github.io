import React, { SVGProps, useRef, useEffect, useState } from 'react';
import SVGGraph from './SVGGraph';
import toGraph, { gml } from 'agora-gml';
import { crop } from 'agora-graph';
import DownloadLink from './DownloadLink';

export const Result: React.FC<
  {
    title: string;
    fileContent: string;
    width: number;
    height: number;
    over?: boolean;
  } & SVGProps<SVGSVGElement>
> = function({ title, fileContent, ...rest }) {
  const svg = useRef<SVGElement>(null);
  const graph = crop(toGraph(gml(fileContent)));
  const [SVGContent, setSVGContent] = useState<string | null>(null);

  useEffect(() => {
    if (svg.current) {
      const serializer = new XMLSerializer();
      setSVGContent(serializer.serializeToString(svg.current!));
    }
  }, [svg]);

  return (
    <div className="result">
      <h2 className="title">{title}</h2>
      <DownloadLink content={fileContent} name={'initial.gml'}>
        GML
      </DownloadLink>
      <DownloadLink content={JSON.stringify(graph)} name={'initial.json'}>
        JSON
      </DownloadLink>
      {SVGContent ? (
        <DownloadLink content={SVGContent} name={'initial.svg'}>
          SVG
        </DownloadLink>
      ) : null}
      <SVGGraph graph={graph} {...rest} svgRef={svg} />
    </div>
  );
};

export default Result;
