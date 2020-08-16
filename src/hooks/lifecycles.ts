import { useEffect, useState } from "react";

export function useMounted(func: () => void) {
  const [_mounted, _setMounted] = useState<boolean>(false);
  const [_unMounted, _setUnmounted] = useState<boolean>(false);
  useEffect(() => {
    if (!_mounted && !_unMounted) {
      func();
      _setMounted(true);
    }

    return () => {
      _setUnmounted(true);
    };
  });
}

export function useUpdated(func: () => void, deps?: any[]) {
  const [_mounted, _setMounted] = useState<boolean>(false);
  useEffect(() => {
    if (!_mounted) {
      _setMounted(true);
    } else {
      func();
    }
  }, deps);
}
