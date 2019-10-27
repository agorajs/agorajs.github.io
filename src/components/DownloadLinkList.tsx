import React from 'react';
import DownloadLink from './DownloadLink';

export const DownloadLinkList: React.FC<{
  name: string;
  gml?: string;
  json: string;
  svg?: string | null;
}> = function({ name, gml, json, svg }) {
  return (
    <div className="f7">
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

export default DownloadLinkList;
