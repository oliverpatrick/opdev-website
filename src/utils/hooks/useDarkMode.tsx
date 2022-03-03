import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export function useDarkMode() {
  const [enabled, setEnabledState] = useLocalStorage<boolean>('dark', false);
  const isEnabled = typeof enabled === 'undefined' && enabled;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = document.documentElement.classList;

    isEnabled ? bodyClass.add('dark') : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabledState];
}
