// src/hooks/useAPI.ts

import { useState, useCallback } from 'react';

interface APIResponse<T> {
  execute: (...args: any[]) => Promise<T>;
  data: T | null;
  loading: boolean;
  error: any;
}

export const useAPI = <T>(apiFunction: (...args: any[]) => Promise<T>): APIResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const execute = useCallback(async (...args: any[]) => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiFunction(...args);
      setData(result);
      return result;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [apiFunction]);

  return { execute, data, loading, error };
};

export default useAPI;