// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

/**
 * Custom hook to track whether a CSS media query matches.
 * @param query - The media query string (e.g., '(min-width: 768px)').
 * @returns `true` if the query matches, `false` otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Update state on change
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial state correctly after mount
    setMatches(getMatches(query));

    // Listen for changes
    // Using addEventListener for modern browsers, addListener for older ones
    try {
        mediaQueryList.addEventListener('change', handleChange);
    } catch (error) {
        // Fallback for older browsers
        try {
            mediaQueryList.addListener(handleChange);
        } catch (error_2) {
            console.error("useMediaQuery: Error setting up listener", error_2)
        }
    }


    // Cleanup listener on component unmount
    return () => {
        try {
            mediaQueryList.removeEventListener('change', handleChange);
        } catch (error) {
            // Fallback for older browsers
            try {
                mediaQueryList.removeListener(handleChange);
            } catch (error_2) {
                 console.error("useMediaQuery: Error cleaning up listener", error_2)
            }
        }
    };
  }, [query]); // Re-run effect if query changes

  return matches;
}