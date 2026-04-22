import { useCallback } from 'react';
import { fetchSkillsData } from '../services/skillsApi';
import { useAsyncResource } from '../../../hooks/useAsyncResource';

export function useFetchSkills(simulateError = false) {
  const fetcher = useCallback(
    (signal) => fetchSkillsData(simulateError, signal),
    [simulateError]
  );
  return useAsyncResource(fetcher);
}
