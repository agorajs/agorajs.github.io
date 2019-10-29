import Uppy, { UppyFile } from '@uppy/core';
import _ from 'lodash';

import { useEffect, useMemo } from 'react';

export default function useUppy(
  config: object,
  listeners: {
    [k: string]: (result: UppyFile, ...rest: any[]) => any;
  }
) {
  const uppy = useMemo(() => Uppy(config), [config]);
  useEffect(() => {
    _.forEach(listeners, (item, key) => uppy.on(key, item));

    return () => uppy.close();
  }, [listeners, uppy]);

  return uppy;
}
