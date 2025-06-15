import { useContext } from 'react';
import { StoreContext } from '../components/providers/MobXProvider';
import { RootStore } from './rootStore';

export function useStore(): RootStore {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
}
