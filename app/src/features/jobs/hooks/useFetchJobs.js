import { useCallback } from 'react';
import { fetchJobsData } from '../services/jobsApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchJobs(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchJobsData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
