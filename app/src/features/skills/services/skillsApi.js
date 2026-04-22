import { mockSkillsData } from '../data';

/**
 * Simulates fetching skills data from an API.
 * @param {boolean} simulateError - If true, the promise will reject.
 * @param {AbortSignal} [signal] - Optional signal to abort the request.
 * @returns {Promise<{data: Object, meta: Object}>} The structured response containing skills data and metadata.
 */
export function fetchSkillsData(simulateError = false, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    const timer = setTimeout(() => {
      if (simulateError) {
        reject(new Error('Failed to fetch skills data.'));
      } else {
        // Return a structured response that mimics a real API
        resolve({
          data: mockSkillsData,
          meta: {
            status: 'success',
            timestamp: new Date().toISOString()
          }
        });
      }
    }, 200); // simulate 200ms network latency

    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    }
  });
}
