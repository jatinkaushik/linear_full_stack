"use client";
import { observer } from 'mobx-react-lite';
import { useStore } from '@/app/store/useStore';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon } from "lucide-react"

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
    <Button
      variant="ghost"
      size="icon"
      className="size-9"
      onClick={() => {
        themeStore.toggleTheme();
      }}
    >
      {themeStore.theme === "light" ? <MoonIcon className="text-lg" /> : <SunIcon className="text-lg" />}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
});

// Export as a non-SSR component
const ThemeButton = dynamic(() => Promise.resolve(ClientOnlyThemeButton), {
  ssr: false
});

export default ThemeButton;