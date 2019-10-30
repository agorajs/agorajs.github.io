import React, { useEffect, useState } from 'react';

export const DownloadLink: React.FC<{
  content: string;
  name: string;
}> = function({ content, name, children }) {
  const [url, setUrl] = useState();

  useEffect(() => {
    var blob = new Blob([content], { type: 'plain/text' });
    (blob as any).name = blob;
    const url = URL.createObjectURL(blob);

    setUrl(url);
    // cleanup on unmount
    return () => URL.revokeObjectURL(url);
  }, [name, content]);

  // TODO suspense update
  return url ? (
    <a href={url} download={name} className="bw1 ba mr1 no-underline">
      {children ? children : name}
    </a>
  ) : null;
};

export default DownloadLink;
