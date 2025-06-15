'use client';

import React, { createContext, useState } from 'react';
import { RootStore } from '@/app/store/rootStore';

export const StoreContext = createContext<RootStore | undefined>(undefined);

export default function MobXProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [rootStore] = useState(() => new RootStore());
  
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
}
