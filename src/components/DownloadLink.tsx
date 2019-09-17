import React, { useEffect } from 'react';

export const DownloadLink: React.FC<{
  content: string;
  name: string;
}> = function({ content, name, children }) {
  function createURL(name: string, content: string) {
    var file = new File([content], name, { type: 'plain/text' });
    return URL.createObjectURL(file);
  }

  const url = createURL(name, content);

  // cleanup on unmount
  useEffect(() => () => URL.revokeObjectURL(url));

  // TODO suspense update
  return (
    <a href={url} download={name}>
      {children ? children : name}
    </a>
  );
};

export default DownloadLink;
