'use client';

import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/app/store/useStore';

interface MobXThemeProviderProps {
  children: React.ReactNode;
}

const MobXThemeProvider: React.FC<MobXThemeProviderProps> = observer(({ children }) => {
  const { themeStore } = useStore();
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Initialize theme from localStorage after component mounts
  useEffect(() => {
    themeStore.initializeFromStorage();
    setIsHydrated(true);
    
    // Apply the theme class to the body element
    if (themeStore.theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [themeStore]);
  
  // If the theme changes after initialization, update the body class
  useEffect(() => {
    if (isHydrated) {
      if (themeStore.theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, [themeStore.theme, isHydrated]);
  
  return (
    <>
      {children}
    </>
  );
});

export default MobXThemeProvider;
