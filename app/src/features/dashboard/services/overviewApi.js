import { mockOverviewData } from '../data';

/**
 * Simulates fetching overview data from an API.
 * @param {boolean} simulateError - If true, the promise will reject.
 * @param {AbortSignal} [signal] - Optional signal to abort the request.
 * @returns {Promise<{data: Object, meta: Object}>} The structured response containing overview data and metadata.
 */
export function fetchOverviewData(simulateError = false, signal) {
  return new Promise((resolve, reject) => {
    let abortListener;
    let timer;

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      if (signal && abortListener) {
        signal.removeEventListener('abort', abortListener);
      }
    };

    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }

    abortListener = () => {
      cleanup();
      reject(new DOMException('Aborted', 'AbortError'));
    };

    if (signal) {
      signal.addEventListener('abort', abortListener);
    }

    timer = setTimeout(() => {
      cleanup();
      if (simulateError) {
        reject(new Error('Failed to fetch overview data.'));
      } else {
        // Return a structured response that mimics a real API
        resolve({
          data: mockOverviewData,
          meta: {
            status: 'success',
            timestamp: new Date().toISOString()
          }
        });
      }
    }, 800); // simulate 800ms network latency
  });
}
