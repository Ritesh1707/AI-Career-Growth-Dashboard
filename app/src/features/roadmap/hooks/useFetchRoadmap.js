import { useState, useEffect, useCallback } from 'react';
import { fetchRoadmapData } from '../services/roadmapApi';

export function useFetchRoadmap(simulateError = false) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const refetch = useCallback(() => {
    setTrigger(prev => prev + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    setIsLoading(true);
    setError(null);

    fetchRoadmapData(simulateError, controller.signal)
      .then((response) => {
        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        if (isMounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [simulateError, trigger]);

  return { data, isLoading, error, refetch };
}
