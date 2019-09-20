import React, { useEffect, useState } from 'react';

export const DownloadLink: React.FC<{
  content: string;
  name: string;
}> = function({ content, name, children }) {
  const [url, setUrl] = useState();

  useEffect(() => {
    var file = new File([content], name, { type: 'plain/text' });
    const url = URL.createObjectURL(file);

    setUrl(url);
    // cleanup on unmount
    return () => URL.revokeObjectURL(url);
  }, [name, content]);

  // TODO suspense update
  return url ? (
    <a href={url} download={name} className="bw1 ba ph1 mr1 no-underline">
      {children ? children : name}
    </a>
  ) : null;
};

export default DownloadLink;
