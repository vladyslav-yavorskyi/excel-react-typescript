import { useCallback, useRef } from 'react';

const useDebaunce = (callback: Function, delay: number) => {
  const timer = useRef<any>(null);

  const debauncedCallback = useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debauncedCallback;
};

export default useDebaunce;
