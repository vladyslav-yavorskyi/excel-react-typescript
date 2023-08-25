import { useCallback, useState } from 'react';

function useClientRect() {
  const [rect, setRect] = useState(null);
  const elementRef = useCallback((node: any) => {
    if (node !== null) {
      setRect(node);
    }
  }, []);
  return [rect, elementRef];
}

export default useClientRect;
