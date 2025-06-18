'use client';

import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { SidebarTrigger as UISidebarTrigger } from '@/components/ui/sidebar';
import { useStore } from '@/app/store/useStore';
import dynamic from 'next/dynamic';

// Create client-only version of the trigger
const ClientOnlySidebarTrigger = dynamic(() => Promise.resolve(UISidebarTrigger), {
  ssr: false
});

const MobXSidebarTrigger: React.FC = observer(() => {
  const { sidebarStore } = useStore();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleToggle = () => {
    sidebarStore.toggle();
  };

  // Only render on client to avoid hydration mismatch
  if (!isMounted) {
    return null; // Return nothing during SSR and initial render
  }

  return <ClientOnlySidebarTrigger className='hover:cursor-pointer mb-0' onClick={handleToggle} />;
});

export default MobXSidebarTrigger;
