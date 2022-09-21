import { useEffect } from 'react';

/**
 * It's just a useEffect without dependencies and eslint rule disabled;
 */

const useMountEffect = (callback: () => any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(() => callback(), []);
};

export { useMountEffect };
