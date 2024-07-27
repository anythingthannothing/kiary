'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useLocalStorageState(
  initialState: boolean,
  key: string,
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState<boolean>(initialState);

  useEffect(
    function () {
      const storedValue =
        localStorage.getItem(key) &&
        JSON.parse(localStorage.getItem(key) as string);
      const value =
        storedValue ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
