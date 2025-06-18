'use client';

import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { SidebarProvider as UISidebarProvider } from '@/components/ui/sidebar';
import { useStore } from '@/app/store/useStore';

interface MobXSidebarProviderProps {
  children: React.ReactNode;
}

const MobXSidebarProvider: React.FC<MobXSidebarProviderProps> = observer(({ children }) => {
  const { sidebarStore } = useStore();
  // Initialize with a default state that will be the same during server-side rendering
  const [isHydrated, setIsHydrated] = useState(false);
  
  // Only use the MobX state after hydration is complete
  useEffect(() => {
    // Initialize from localStorage after component mounts
    sidebarStore.initializeFromStorage();
    setIsHydrated(true);
  }, [sidebarStore]);
  
  // During server-side rendering or before hydration, use a consistent default (false/collapsed)
  // After hydration, use the actual MobX state
  const isOpen = isHydrated ? sidebarStore.state === 'expanded' : false;
  
  const handleOpenChange = (open: boolean) => {
    sidebarStore.setState(open ? 'expanded' : 'collapsed');
  };

  return (
    <UISidebarProvider 
      defaultOpen={false} // Always use the same default for server rendering
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      {children}
    </UISidebarProvider>
  );
});

export default MobXSidebarProvider;
