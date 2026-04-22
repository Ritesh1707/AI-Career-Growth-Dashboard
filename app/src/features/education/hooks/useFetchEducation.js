import { useCallback } from 'react';
import { fetchEducationData } from '../services/educationApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchEducation(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchEducationData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
