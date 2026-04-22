import { useCallback } from 'react';
import { fetchProjectsData } from '../services/projectsApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchProjects(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchProjectsData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
