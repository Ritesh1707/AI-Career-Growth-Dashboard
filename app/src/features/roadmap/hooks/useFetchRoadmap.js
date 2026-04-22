import { useCallback } from 'react';
import { fetchRoadmapData } from '../services/roadmapApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchRoadmap(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchRoadmapData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
