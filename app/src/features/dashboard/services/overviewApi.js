import { mockOverviewData } from '../data';

/**
 * Simulates fetching overview data from an API.
 * @param {boolean} simulateError - If true, the promise will reject.
 * @returns {Promise<Object>} The overview data.
 */
export async function fetchOverviewData(simulateError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
