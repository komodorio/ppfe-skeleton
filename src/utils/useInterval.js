import { useEffect, useRef } from "react";

export const useInterval = (callback, delay, isRunning) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (isRunning) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay,isRunning]);
};
