import { useCallback } from 'react';
import { fetchCertificationsData } from '../services/certificationsApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchCertifications(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchCertificationsData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
