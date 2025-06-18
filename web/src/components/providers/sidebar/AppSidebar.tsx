'use client';

import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { AppSidebar as BaseAppSidebar } from '@/components/app-sidebar';
import { useStore } from '@/app/store/useStore';
import dynamic from 'next/dynamic';

// Create a non-SSR version of AppSidebar to avoid hydration issues
const ClientOnlyAppSidebar = dynamic(() => Promise.resolve(BaseAppSidebar), {
  ssr: false
});

const MobxAppSidebar: React.FC = observer(() => {
  const { sidebarStore } = useStore();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Only render on the client to avoid hydration mismatch
  if (!isMounted) {
    return null; // Return nothing during SSR and initial render
  }
  
  return <ClientOnlyAppSidebar />;
});

export default MobxAppSidebar;
