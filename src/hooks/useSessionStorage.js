import { useEffect, useState } from 'react';

export const useSessionStorage = (key, initialState = []) => {
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  return [data, setData];
};
