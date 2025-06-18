"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { observer } from 'mobx-react-lite';
import { useStore } from '@/app/store/useStore';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Create a client-only component to avoid hydration issues
const ClientOnlyThemeButton = observer(() => {
  const { themeStore } = useStore();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Don't render anything until client-side
  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="fixed top-[6px] right-[6px] z-50">
      <button
        className={`bg-theme-button-background max-w-3xs w-auto text-theme-button-foreground p-2 rounded hover:cursor-pointer flex items-center gap-2`}
        onClick={() => {
          themeStore.toggleTheme();
        }}
        aria-label="Toggle Theme"
      >
        {themeStore.theme === "light" ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
      </button>
    </div>
  );
});

// Export as a non-SSR component
const ThemeButton = dynamic(() => Promise.resolve(ClientOnlyThemeButton), {
  ssr: false
});

export default ThemeButton;