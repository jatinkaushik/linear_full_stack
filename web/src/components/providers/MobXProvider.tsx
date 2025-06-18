'use client';

import React, { createContext, useState, useRef } from 'react';
import { RootStore } from '@/app/store/rootStore';

// Create a consistent store context
export const StoreContext = createContext<RootStore | undefined>(undefined);

// Create a consistent initial store for both server and client
const createStore = () => new RootStore();

export default function MobXProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  // Use useRef to ensure the store instance doesn't change on re-renders
  const storeRef = useRef<RootStore | null>(null);
  
  // Only create the store once
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
}
