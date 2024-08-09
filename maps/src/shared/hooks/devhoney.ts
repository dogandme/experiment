import { useEffect, DependencyList } from 'react';

/**
 * NextJS 의 global 은 globalThis 이거나 window 이기 때문에 매번 useEffect 를 통해 window 에 접근하고자 할 때
 * 매번 조건문으로 타입가드를 해주는 것이 번거로워 로직을 추상화 한 hook
 */
export const useClientEffect = (
  callbackFn: () => void,
  deps?: DependencyList,
) =>
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    callbackFn();
  }, deps);
