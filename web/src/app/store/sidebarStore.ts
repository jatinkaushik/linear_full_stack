import { observable, action, makeObservable } from 'mobx';

export class SidebarStore {
  // Default to collapsed to match the server-side rendering default
  state: 'expanded' | 'collapsed' = 'collapsed';
  isInitialized: boolean = false;
  
  constructor() {
    makeObservable(this, {
      state: observable,
      isInitialized: observable,
      toggle: action,
      setState: action,
      initializeFromStorage: action
    });
    
  }

  // Call this method from a useEffect in the client-side code
  initializeFromStorage() {
    if (typeof window !== 'undefined' && !this.isInitialized) {
      const savedState = localStorage.getItem('sidebar_state');
      if (savedState === 'collapsed' || savedState === 'expanded') {
        this.state = savedState;
      }
      this.isInitialized = true;
    }
  }
  
  toggle() {
    this.state = this.state === 'expanded' ? 'collapsed' : 'expanded';
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar_state', this.state);
    }
  }
  
  setState(state: 'expanded' | 'collapsed') {
    this.state = state;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sidebar_state', this.state);
    }
  }
}
