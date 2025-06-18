import { ThemeStore } from './themeStore';
import { SidebarStore } from './sidebarStore';

export class RootStore {
  themeStore: ThemeStore;
  sidebarStore: SidebarStore;
  
  constructor() {
    this.themeStore = new ThemeStore();
    this.sidebarStore = new SidebarStore();
  }
}