import { mockCertificationsData } from '../data';

/**
 * Simulates fetching certifications data from an API.
 * @param {boolean} simulateError - If true, the promise will reject.
 * @param {AbortSignal} [signal] - Optional signal to abort the request.
 * @returns {Promise<{data: Array, meta: Object}>} The structured response.
 */
export function fetchCertificationsData(simulateError = false, signal) {
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
        reject(new Error('Failed to fetch certifications data.'));
      } else {
        resolve({
          data: mockCertificationsData,
          meta: {
            status: 'success',
            timestamp: new Date().toISOString()
          }
        });
      }
    }, 200); // simulate 200ms network latency
  });
}
