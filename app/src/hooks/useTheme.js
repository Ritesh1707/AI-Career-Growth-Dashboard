import { useContext } from 'react';
import { ThemeContext } from '../app/providers/ThemeProvider';

/**
 * Convenience hook to access the current theme and toggle function.
 *
 * Usage:
 *   const { theme, toggleTheme } = useTheme();
 */
export default function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
