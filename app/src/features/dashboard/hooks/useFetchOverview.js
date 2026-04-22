import { useCallback } from 'react';
import { fetchOverviewData } from '../services/overviewApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchOverview(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchOverviewData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
