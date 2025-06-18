import { observable, action, makeObservable } from 'mobx';

export class ThemeStore {
  // Default to light theme for initial server rendering
  theme: 'light' | 'dark' = 'light';
  isInitialized: boolean = false;
  
  constructor() {
    makeObservable(this, {
      theme: observable,
      isInitialized: observable,
      toggleTheme: action,
      setTheme: action,
      initializeFromStorage: action
    });
    
    // Don't initialize from localStorage during constructor
    // to avoid hydration mismatches
  }
  
  // Call this method from a useEffect in the client-side code
  initializeFromStorage() {
    if (typeof window !== 'undefined' && !this.isInitialized) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.setTheme(savedTheme);
      }
      this.isInitialized = true;
    }
  }
  
  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  
  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    
    // Only manipulate the DOM if we're in the browser
    if (typeof window !== 'undefined') {
      if (this.theme === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('theme', this.theme);
    }
  }
}